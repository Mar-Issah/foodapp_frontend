import mongoose, { Schema, models} from "mongoose";
// const mongoose = require('mongoose')
// const { Schema, models } = mongoose
const CategorySchema = new Schema({
    name: {
        type: String
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "product"
        }
    ]
}, { timestamps: true })

const Category = models.category || mongoose.model("category", CategorySchema)
// const User = mongoose.model("user", UserSchema);

export default Category;
// module.exports = Category;