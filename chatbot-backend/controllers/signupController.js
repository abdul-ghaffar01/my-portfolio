import connectDB from '../db.js';
import User from '../models/User.js';

export const signupController = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    await connectDB()

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already in use' });
    }

    const newUser = new User({ fullName, email, password }); // Password will hash via pre-save
    await newUser.save();

    return res.status(201).json({ message: 'Account created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
