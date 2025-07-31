import connectDB from '../db.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const guestSignupController = async (req, res) => {
  try {
    const { who } = req.body;

    await connectDB();

    // Count how many guest users are already in the DB
    const guestCount = await User.countDocuments({ email: /@guest\.iabdulghaffar\.com$/ });

    // Create a unique guest fullName and email
    const fullName = `${who}_guest_${guestCount + 1}`;
    const email = `guest_${guestCount + 1}@guest.iabdulghaffar.com`;
    const password = Math.random().toString(36).slice(-8); // Random 8-char password

    const newUser = new User({ fullName, email, password });
    await newUser.save();

    // Generate JWT
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email, fullName: newUser.fullName },
      process.env.JWT_SECRET,
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
