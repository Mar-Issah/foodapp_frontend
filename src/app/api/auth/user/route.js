import { connectMongodb } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function POST(request) {
  await connectMongodb();
  const body = await request.json();
  const user = await User.create(body);
  return NextResponse.json({ message: 'user created successfully' }, { status: 201 });
}
