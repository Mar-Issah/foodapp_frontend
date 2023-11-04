// pages/api/signin.js
import { connectMongodb } from '@/lib/mongodb';
import User from '@/models/user';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const handler = async (req, res) => {
  await connectMongodb();
  if (req.method === 'POST') {
    try {
      const { email, password } = await req.json();
      const user = await User.findOne({ email });
      if (!user) {
        return new NextResponse(JSON.stringify({ error: 'User not found' }), { status: 401 });
      }
      // Compare the provided password with the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return new NextResponse(JSON.stringify({ error: 'Incorrect password' }), { status: 401 });
      }
      // User is authenticated, generate and send a JSON Web Token (JWT)
      const token = sign({ email: user.email }, process.env.JWT_SECRET);

      return new NextResponse(JSON.stringify({ message: 'authenticated', token }), { status: 200 });
    } catch (error) {
      return new NextResponse(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }
  }
};

export { handler as POST };
