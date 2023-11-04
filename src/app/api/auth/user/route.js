import { connectMongodb } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request) {
  await connectMongodb();
  const body = await request.json();

  if (request.method === 'GET') {
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'already exists' });
      }

      if (body.email && body.password) {
        // Hash the password
        const hashedPassword = await bcrypt.hash(body.password, 10);
        // Create a new user
        const newUser = new User({
          email,
          password: hashedPassword, // Store the hashed password
        });
        await newUser.save();
      } else {
        const newUser = await User.create(body);
      }
      res.status(201).json({ message: 'User registered successfully' });
      return NextResponse.json({ message: 'user created successfully' }, { status: 201 });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
    }
  }
}
