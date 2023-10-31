import Product from '@/models/Product';
import { NextResponse } from 'next/server';
import { connectMongodb } from '@/lib/mongodb';

connectMongodb();

// GET SINGLE PRODUCT
export const GET = async (req, { params }) => {
  const { method } = req;

  if (method === 'GET') {
    try {
      const product = await Product.findById(params.id);
      return new NextResponse(JSON.stringify(product), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
    }
  }
};

// DELETE SINGLE PRODUCT
export const DELETE = async (req, { params }) => {
  const { method } = req;
  // const { id } = params;

  if (method === 'DELETE')
    try {
      await Product.findByIdAndDelete(params.id);
      return new NextResponse(JSON.stringify('Product has been deleted!'), {
        status: 200,
      });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
    }
};
