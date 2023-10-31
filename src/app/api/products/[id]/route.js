import Product from '@/models/Product';
import { NextResponse } from 'next/server';
import { connectMongodb } from '@/lib/mongodb';

connectMongodb();

// GET SINGLE PRODUCT
export const GET = async (req) => {
  const { method, query } = req;
  const id = query.id;

  if (method === 'GET') {
    try {
      const product = await Product.findById(id);
      return new NextResponse(JSON.stringify(product), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
    }
  }
};

// DELETE SINGLE PRODUCT
export const DELETE = async (req) => {
  const { method, query } = req;
  const id = query.id;

  if (method === 'DELETE')
    try {
      await Product.findByIdAndDelete(id);
      return new NextResponse(JSON.stringify('Product has been deleted!'), {
        status: 200,
      });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
    }
};
