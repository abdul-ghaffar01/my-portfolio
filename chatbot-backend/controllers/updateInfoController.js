// controllers/userController.js
import bcrypt from "bcrypt";
import User from "../models/User.js";

/**
 * @desc Update personal details (name, email, password)
 * @route PUT /api/user/update
 * @access Private
 */
export const updatePersonalDetails = async (req, res) => {
    try {
        const userId = req.user.id; // ✅ middleware sets req.user
        const { fullName, email, password } = req.body;
        console.log(req.body);

        // ✅ Validate input: At least one field must be provided
        if (!fullName && !email && !password) {
            return res.status(400).json({ message: "Please provide at least one field to update." });
        }

        // ✅ Fetch user from DB
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const updates = {};

        // ✅ Update full name
        if (fullName && fullName.trim() !== user.fullName) {
            updates.fullName = fullName.trim();
        }

        // ✅ Update email (check uniqueness only if changed)
        if (email && email.trim() !== user.email) {
            const existingUser = await User.findOne({ email: email.trim().toLowerCase() });

            // ✅ Only throw error if another user already has that email
            if (existingUser && existingUser._id.toString() !== user._id.toString()) {
                return res.status(400).json({ message: "Email already in use." });
            }
            updates.email = email.trim().toLowerCase();
        }

        // ✅ Update password (frontend already validates confirm password)
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            updates.password = hashedPassword;
        }

        // ✅ Apply updates
        Object.assign(user, updates);
        await user.save();

        // ✅ Send sanitized user (omit password)
        const sanitizedUser = {
            id: user._id,
            fullName: user.fullName,
            email: user.email,
        };

        return res.status(200).json({
            message: "Personal details updated successfully.",
            user: sanitizedUser,
        });
    } catch (error) {
        console.error("Update personal details error:", error.message);
        return res.status(500).json({ message: "Server error." });
    }
};
