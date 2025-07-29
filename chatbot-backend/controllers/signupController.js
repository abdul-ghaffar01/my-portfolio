import connectDB from '../db.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken'; // Ensure this is installed
import dotenv from 'dotenv';

dotenv.config(); // Load JWT secret

export const signupController = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    await connectDB();

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already in use' });
    }

    const newUser = new User({ fullName, email, password }); // password gets hashed via pre-save hook
    await newUser.save();

    // Generate JWT
    const token = jwt.sign(
      { userId: newUser._id, role: "user" },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.status(201).json({
      message: 'Signup successful',
      token,
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
