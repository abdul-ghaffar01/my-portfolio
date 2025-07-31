import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const verifyAuthMiddleware = async (req, res, next) => {
    try {
        // ✅ Check for token in Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No token provided, authorization denied." });
        }

        const token = authHeader.split(" ")[1];

        // ✅ Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded || !decoded.userId) {
            return res.status(401).json({ message: "Invalid token." });
        }

        // ✅ Fetch user from DB
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(401).json({ message: "User not found." });
        }

        // ✅ Attach user to request object
        req.user = { id: user._id, email: user.email, role: user.role };

        next(); // Move to next middleware/controller
    } catch (error) {
        console.error("Auth Middleware Error:", error.message);
        return res.status(401).json({ message: "Unauthorized or token expired." });
    }
};
