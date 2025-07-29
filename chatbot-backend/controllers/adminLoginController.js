import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default async function adminLoginController(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    // Check hardcoded admin credentials
    if (
        email === process.env.ADMIN_EMAIL &&
        password === process.env.ADMIN_PASSWORD
    ) {
        try {
            const user = await User.findOne({ email })
            console.log(user)
            const token = jwt.sign(
                { userId: user._id, role: "admin" },
                process.env.JWT_SECRET, // secret from env
                { expiresIn: "1h" } // token expiry
            );

            return res.status(200).json({
                message: "Admin login successful",
                token,
                admin: { email, role: "admin" },
            });
        } catch (error) {
            console.error("JWT error:", error);
            return res.status(500).json({ message: "Error generating token" });
        }
    }

    // Invalid credentials
    return res.status(401).json({ message: "Invalid email or password" });
}
