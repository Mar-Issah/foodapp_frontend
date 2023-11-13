// pages/api/signup.js
import { connectMongodb } from '@/lib/mongodb';
import User from '@/models/user';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

//handler function for the signup api
const handler = async (req, res) => {
  const { method } = req;
  if (method === 'POST') {
    await connectMongodb();
    try {
      const body = await req.json();
      // Hash the password
      const hashedPassword = await bcrypt.hash(body.password, 10);
      const newBody = {
        email: body.email,
        fullname: body.fullname,
        phone: body.phone,
        password: hashedPassword,
      };
      const newUser = await User.create(newBody);
      return new NextResponse(JSON.stringify(newUser), { status: 201 });
    } catch (error) {
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
    }
  }
};

export { handler as POST };
