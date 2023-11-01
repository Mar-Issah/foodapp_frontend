import Product from "@/models/product";
// import { prisma } from "@/utils/connect";
import { connectMongodb } from '@/lib/mongodb';
import { NextResponse } from "next/server";
import Joi from 'joi'
// FETCH ALL PRODUCTS
export const GET = async (req) => {
    const { cat } = req.nextUrl.searchParams

    try {
        await connectMongodb();
        // Create a query object
        const query = {};

        // If the "cat" parameter is provided, add it to the query
        if (cat) {
            query.catSlug = cat;
        }

        // Use Mongoose to query products based on the optional "cat" parameter
        const products = await Product.find(query)
            //  .populate('category') // Populate the 'category' field
            // .exec();
        return new NextResponse(JSON.stringify(products), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }),
            { status: 500 }
        );
    }
};

//Create new product
// export const POST = async (req) => {
//     try {
//        const schema = Joi.object({
//             price: Joi.string().required(),
//             img: Joi.string().required(),
//             name: Joi.string().required(),
//             isFeatured: Joi.boolean().optional(),
//             catSlug: Joi.string()
//         })
//         const body = await req.json();
//         const values = await schema.validateAsync(body)
//         const product = new Product({ body })
//         await product.save()
//         return NextResponse.json((product), { status: 201 });
//     } catch (err) {
//         console.log(err);
//         return NextResponse.json(({ message: "Something went wrong!" }),
//             { status: 500 }
//         );
//     }
// };

export default { GET}