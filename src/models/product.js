// const mongoose = require('mongoose')
// const { Schema, models } = mongoose
import mongoose , { Schema, models} from 'mongoose'
const ProductSchema = new Schema({
    price: {
        type: Number
    },
    img: {
        type: String
    },
    name: {
        type: String
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "category"
    },
    catSlug: {
        type: String,
    }


}, { timestamps: true })


const Product = models.product || mongoose.model("product", ProductSchema)


// const User = mongoose.model("user", UserSchema);

// module.exports = Product;
export default Product