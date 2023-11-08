import User from '@/models/user';
import { NextResponse } from 'next/server';
import { connectMongodb } from '@/lib/mongodb';

// GET SINGLE user by email
export const GET = async (req, { params }) => {
  await connectMongodb();
  const { method } = req;

  if (method === 'GET') {
    try {
      const email = params.id;
      const user = await User.findOne({ email });
      return new NextResponse(JSON.stringify(user), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
    }
  }
};

// DELETE SINGLE PRODUCT
// export const DELETE = async (req, { params }) => {
//   const { method } = req;
//   // const { id } = params;

//   await connectMongodb();
//   if (method === 'DELETE')
//     try {
//       await Product.findByIdAndDelete(params.id);
//       return new NextResponse(JSON.stringify('Product has been deleted!'), {
//         status: 200,
//       });
//     } catch (err) {
//       console.log(err);
//       return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
//     }
// };
