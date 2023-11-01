import { connectMongodb } from '@/lib/mongodb';
import Order from '@/models/Orders';
import { NextResponse } from 'next/server';

connectMongodb();

// FETCH ALL PRODUCTS
export const GET = async (req) => {
  const { method } = req;

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

//Addd new produt
export const POST = async (req) => {
  const { method } = req;

  if (method === 'POST') {
    try {
      const order = await Order.create(req.body);
      return new NextResponse(JSON.stringify(order), { status: 201 });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
    }
  }
};
