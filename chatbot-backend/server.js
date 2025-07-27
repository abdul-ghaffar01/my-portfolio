import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import { loginController } from './controllers/loginController.js';
import { signupController } from './controllers/signupController.js';
import connectDB from './db.js';
import Message from './models/Message.js'; // if you want to store messages
import { guestSignupController } from './controllers/guesSignupController.js';

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
app.post('/signup-guest', guestSignupController)

// Create HTTP server
const server = http.createServer(app);

// Create Socket.IO server
const io = new Server(server, {
    cors: {
        origin: '*', // Use frontend URL in production
        methods: ['GET', 'POST']
    }
});
io.on('connection', async (socket) => {
    const userId = socket.handshake.query.userId;
    console.log(`🟢 New client connected: ${socket.id}, userId: ${userId}`);

    try {
        // Load messages either sent *by* or *to* this user
        const history = await Message.find({
            $or: [{ userId }, { to: userId }]
        })
            .sort({ sentAt: -1 }) // latest messages first
            .limit(50);

        const orderedHistory = history.reverse(); // so they appear in correct order
        socket.emit('chatHistory', orderedHistory);


        socket.emit('chatHistory', orderedHistory);
    } catch (err) {
        console.error('Error loading history:', err.message);
    }

    socket.on('sendMessage', async (data) => {
        try {
            // Save user's message
            const savedUserMessage = await Message.create({
                userId: data.userId,
                content: data.content,
                sender: "user",
                to: "6884c115c3fd2ec85813625a" // replace with real bot ID
            });
            io.emit('receiveMessage', savedUserMessage);

            // Save bot reply
            const savedBotMessage = await Message.create({
                userId: "6884c115c3fd2ec85813625a", // bot's userId
                content: "The bot is still under developement",
                sender: "chatbot",
                to: data.userId
            });
            io.emit('receiveMessage', savedBotMessage);
        } catch (err) {
            console.error('Error handling message:', err.message);
        }
    });

    socket.on('disconnect', () => {
        console.log('🔴 Client disconnected:', socket.id);
    });
});



// Start server
server.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
