// controllers/chatbotController.js
import jwt from 'jsonwebtoken';
import { getChatbotResponse } from '../utils/chatbotResponse.js';

const SECRET = "the_secret80lksud8xod893";

export const chatbotController = (req, res) => {
    try {
        // ✅ Extract token from Authorization header (Bearer token)
        const authHeader = req.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Authorization token is missing or invalid' });
        }

        const token = authHeader.split(' ')[1];

        // ✅ Verify token
        jwt.verify(token, process.env.JWT_SECRET_BOT, (err) => {
            if (err) {
                return res.status(403).json({ error: 'Invalid or expired token' });
            }

            // ✅ Process chatbot message
            const { message } = req.body;
            if (!message || typeof message !== 'string') {
                return res.status(400).json({ error: 'Message is required and must be a string' });
            }

            const response = getChatbotResponse(message);
            return res.status(200).json({ reply: response });
        });
    } catch (error) {
        console.error('Chatbot Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
