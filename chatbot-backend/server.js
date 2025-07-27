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
    const userId = socket.handshake.query.userId;
    console.log(`🟢 New user Connected: ${socket.id}, userId: ${userId}`);

    try {
        if (userId) {
            const user = await User.findById(userId).select('fullName');
            const fullName = user?.fullName || 'Guest User';

            onlineUsers.set(socket.id, { userId, fullName });
            userSockets.set(userId, socket.id);

            const currentOnline = Array.from(onlineUsers.values());
            io.emit('onlineUsers', currentOnline);
            socket.emit('onlineUsers', currentOnline);

            const history = await Message.find({
                $or: [
                    { userId: userId },
                    { to: userId }
                ]
            }).sort({ sentAt: -1 }).limit(50);

            socket.emit('chatHistory', history.reverse());
        } else {
            // Read-only connection
            socket.emit('onlineUsers', Array.from(onlineUsers.values()));
        }
    } catch (err) {
        console.error('Connection error:', err.message);
    }

    socket.on('sendMessage', async (data) => {
        try {
            // Save user's message
            const savedUserMessage = await Message.create({
                userId: data.userId,
                content: data.content,
                sender: "user",
                to: "6884c115c3fd2ec85813625a"
            });

            // Send only to sender
            socket.emit('receiveMessage', savedUserMessage);

            // Save bot reply
            const savedBotMessage = await Message.create({
                userId: "6884c115c3fd2ec85813625a",
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
