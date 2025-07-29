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
import adminLoginController from './controllers/adminLoginController.js';

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
app.post('/adminlogin', adminLoginController)

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
const userSockets = new Map(); // key: userId or "admin", value: socket.id

io.on('connection', async (socket) => {
    const token = socket.handshake.query.token;
    const decoded = jwt_verify(token); // Verify token
    const userId = decoded?.userId || null;
    const isAdmin = decoded?.role === "admin"; // Role should be in token

    console.log(`🟢 Connected: ${socket.id}, userId: ${userId}, isAdmin: ${isAdmin}`);

    // Fetch all users and send to every connected socket
    const allUsers = await User.find().select('fullName _id');
    socket.emit('allUsers', allUsers);

    const currentOnline = Array.from(onlineUsers.values());
    io.emit('onlineUsers', currentOnline);

    try {
        if (isAdmin) {
            // ✅ Register Admin
            userSockets.set("admin", socket.id);
            socket.emit("adminConnected", { message: "Admin connected successfully" });
        }

        if (userId) {
            const user = await User.findById(userId).select('fullName');
            const fullName = user?.fullName || 'Guest User';

            onlineUsers.set(socket.id, { userId, fullName });
            userSockets.set(userId, socket.id);

            socket.emit('onlineUsers', currentOnline);

            // ✅ Send user's own chat history (Bot + User)
            const history = await Message.find({
                $or: [
                    { userId: userId },
                    { to: userId }
                ]
            }).sort({ sentAt: 1 }); // Oldest first

            socket.emit('chatHistory', history);
        }
    } catch (err) {
        console.error('Connection error:', err.message);
    }

    // ✅ Send Message (User -> Bot -> Admin Notification)
    socket.on('sendMessage', async (data) => {
        try {
            console.log("Incoming data:", data);

            // Save user's message
            const savedUserMessage = await Message.create({
                userId: data.userId,
                content: data.content,
                sender: "user",
                to: process.env.BOT_ACCOUNT_ID || "68860f0b7d694be675bae2ff"
            });

            // Send message back to sender
            socket.emit('receiveMessage', savedUserMessage);

            // Notify admin in real-time
            const adminSocketId = userSockets.get("admin");
            if (adminSocketId) {
                io.to(adminSocketId).emit("adminReceiveMessage", savedUserMessage);
            }

            // Bot Reply
            const savedBotMessage = await Message.create({
                userId: process.env.BOT_ACCOUNT_ID || "68860f0b7d694be675bae2ff",
                content: "The bot is still under development.",
                sender: "chatbot",
                to: data.userId
            });

            // Send bot reply to user
            const recipientSocketId = userSockets.get(data.userId);
            if (recipientSocketId) {
                io.to(recipientSocketId).emit('receiveMessage', savedBotMessage);
            }
            // After saving bot reply
            if (adminSocketId) {
                io.to(adminSocketId).emit("adminReceiveMessage", savedBotMessage);
            }

        } catch (err) {
            console.error('Message error:', err.message);
        }
    });

    // ✅ Admin: Fetch All Chats (latest per user)
    socket.on('getAllChats', async () => {
        try {
            const chats = await Message.aggregate([
                {
                    $group: {
                        _id: "$userId",
                        lastMessage: { $last: "$content" },
                        lastSentAt: { $last: "$sentAt" }
                    }
                },
                { $sort: { lastSentAt: -1 } }
            ]);

            const userIds = chats.map((c) => c._id);
            const users = await User.find({ _id: { $in: userIds } }).select("fullName email");

            const formattedChats = chats.map((c) => {
                const user = users.find((u) => u._id.toString() === c._id.toString());
                return {
                    userId: c._id,
                    fullName: user?.fullName || "Unknown User",
                    email: user?.email,
                    lastMessage: c.lastMessage,
                    lastSentAt: c.lastSentAt,
                };
            });

            socket.emit('allChats', formattedChats);
        } catch (err) {
            console.error('Error fetching chats:', err.message);
            socket.emit('allChats', []);
        }
    });

    // ✅ Admin: Fetch Chat History of Specific User
    socket.on("chatHistoryForAdmin", async (targetUserId) => {
        try {
            console.log(`📥 Admin requested chat history for: ${targetUserId}`);

            const history = await Message.find({
                $or: [
                    { userId: targetUserId },
                    { to: targetUserId }
                ]
            }).sort({ sentAt: 1 });

            socket.emit("chatHistoryForAdmin", history);
        } catch (err) {
            console.error("Error fetching chat history for admin:", err.message);
            socket.emit("chatHistoryForAdmin", []);
        }
    });

    // ✅ Disconnect
    socket.on('disconnect', () => {
        console.log('🔴 Disconnected:', socket.id);
        const userInfo = onlineUsers.get(socket.id);

        if (userInfo?.userId) {
            userSockets.delete(userInfo.userId);
        }
        onlineUsers.delete(socket.id);

        // Remove admin socket if disconnected
        if (userSockets.get("admin") === socket.id) {
            userSockets.delete("admin");
        }

        io.emit('onlineUsers', Array.from(onlineUsers.values()));
    });
});

server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
