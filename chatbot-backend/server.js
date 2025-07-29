import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import { loginController } from './controllers/loginController.js';
import { signupController } from './controllers/signupController.js';
import connectDB from './db.js';
import Message from './models/Message.js';
import { guestSignupController } from './controllers/guesSignupController.js';
import User from './models/User.js';
import jwtVerifyController from './controllers/jwtVerifyController.js';
import jwt_verify from './helper/jwt_verify.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3009;

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
await connectDB();

// Routes
app.post('/login', loginController);
app.post('/signup', signupController);
app.post('/signup-guest', guestSignupController);
app.post('/jwtverify', jwtVerifyController);

// Create HTTP server
const server = http.createServer(app);

// Create Socket.IO server
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

const onlineUsers = new Map(); // key: socket.id, value: { userId, fullName }
const userSockets = new Map(); // key: userId, value: socket.id

io.on('connection', async (socket) => {
    /* 
        Taking token from socket handshake query and then verifying it.
        If userId is not present in the token payload, disconnect the socket.
    */
    const token = socket.handshake.query.token;
    const userId = jwt_verify(token).userId || null; // Extract userId from token, or set to null if not available

    // if (!userId) {
    //     console.log('❌ userId missing in token payload');
    //     socket.disconnect(true);
    //     return;
    // }

    console.log(`🟢 New user Connected: ${socket.id}, userId: ${userId}`);

    const allUsers = await User.find().select('fullName _id');
    socket.emit('allUsers', allUsers);

    const currentOnline = Array.from(onlineUsers.values());
    io.emit('onlineUsers', currentOnline);

    try {
        if (userId) {
            const user = await User.findById(userId).select('fullName');
            const fullName = user?.fullName || 'Guest User';

            onlineUsers.set(socket.id, { userId, fullName });
            userSockets.set(userId, socket.id);
            socket.emit('onlineUsers', currentOnline);

            const history = await Message.find({
                $or: [
                    { userId: userId },
                    { to: userId }
                ]
            }).sort({ sentAt: -1 });

            socket.emit('chatHistory', history.reverse());
        }
    } catch (err) {
        console.error('Connection error:', err.message);
    }

    socket.on('sendMessage', async (data) => {
        try {
            console.log("Incoming data:", data);
            console.log("Bot Account ID:", process.env.BOT_ACCOUNT_ID);

            // Save user's message
            const savedUserMessage = await Message.create({
                userId: data.userId,
                content: data.content,
                sender: "user",
                to: process.env.BOT_ACCOUNT_ID || "68860f0b7d694be675bae2ff"
            });

            // Send only to sender
            socket.emit('receiveMessage', savedUserMessage);

            // Save bot reply
            const savedBotMessage = await Message.create({
                userId: process.env.BOT_ACCOUNT_ID || "68860f0b7d694be675bae2ff",
                content: "The bot is still under development.",
                sender: "chatbot",
                to: data.userId
            });

            // Send bot reply only to the user
            const recipientSocketId = userSockets.get(data.userId);
            if (recipientSocketId) {
                io.to(recipientSocketId).emit('receiveMessage', savedBotMessage);
            }
        } catch (err) {
            console.error('Message error:', err.message);
        }
    });


    socket.on('disconnect', () => {
        console.log('🔴 Disconnected:', socket.id);
        const userInfo = onlineUsers.get(socket.id);
        if (userInfo?.userId) {
            userSockets.delete(userInfo.userId);
        }
        onlineUsers.delete(socket.id);
        io.emit('onlineUsers', Array.from(onlineUsers.values()));
    });
});

server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
