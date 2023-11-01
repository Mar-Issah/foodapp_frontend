import mongoose, { Schema, models} from "mongoose";
const OrderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    status: {
        type: String,
        enum: [
            "pending",
            "delivered"
        ],
        default: "pending"
    },
    products : [
        {
            type: Schema.Types.ObjectId,
            ref: "product"
        }
    ],
    amount : {
        type: Number,
        required: true,
    },
},{timestamps: true})

const Order = models.order || mongoose.model("order", OrderSchema)
// const User = mongoose.model("user", UserSchema);

export default Order;