import { connectMongodb } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, name } = await request.json();
  await connectMongodb();
  const user = await User.create({ email, name });
  return NextResponse.json({ message: 'user created successfully' }, { status: 201 });
}
