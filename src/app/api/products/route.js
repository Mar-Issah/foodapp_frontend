import { connectMongodb } from '@/lib/mongodb';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

connectMongodb();

// FETCH ALL PRODUCTS
export const GET = async (req) => {
  const { method, cookies } = req;
  const token = cookies.token;

  if (method === 'GET') {
    try {
      const products = await Product.find();
      return new NextResponse(JSON.stringify(products), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
    }
  }
};

//Addd new produt
export const POST = async (req) => {
  const { method, cookies } = req;
  const token = cookies.token;
  if (method === 'POST') {
    // if (!token || token !== process.env.token) {
    //   return res.status(401).json('Not authenticated!');
    // }
    try {
      const product = await Product.create(req.body);
      return new NextResponse(JSON.stringify(product), { status: 201 });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
    }
  }
};
