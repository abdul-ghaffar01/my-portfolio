import Message from "../models/Message.js";

export default async function messageHandler() {
    {
        try {
            // Save user's message
            const savedUserMessage = await Message.create({
                userId: data.userId,
                content: data.content,
                sender: "user",
                to: process.env.BOT_ACCOUNT_ID
            });

            // Send only to sender
            socket.emit('receiveMessage', savedUserMessage);

            // Save bot reply
            const savedBotMessage = await Message.create({
                userId: process.env.BOT_ACCOUNT_ID,
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
    }
}