import { connectMongodb } from '@/lib/mongodb';
import Order from '@/models/Orders';
import { NextResponse } from 'next/server';

// connectMongodb();

// FETCH ALL ORDERS
export const GET = async (req) => {
  const { method } = req;
  await connectMongodb();
  if (method === 'GET') {
    try {
      const orders = await Order.find();
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
    }
  }
};

//Add a new order
export const POST = async (request) => {
  const { method } = request;
  await connectMongodb();
  if (method === 'POST') {
    try {
      const body = await request.json();
      const order = await Order.create(body);

      return new NextResponse(JSON.stringify(order), { status: 201 });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
    }
  }
};
