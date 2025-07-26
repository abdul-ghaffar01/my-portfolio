
import connectDB from '@/lib/db';
import User from '@/models/User';
import { NextResponse } from 'next/server';


export async function POST(req) {
  try {
    await connectDB();

    const { fullName, email, password } = await req.json();

    if (!fullName || !email || !password) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'Email already in use' }, { status: 409 });
    }

    // Create and save user
    const newUser = new User({
      fullName,
      email,
      password, // password will be hashed in model (via pre-save hook)
    });

    await newUser.save();

    // Success response
    return NextResponse.json({ message: 'Account created successfully' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
