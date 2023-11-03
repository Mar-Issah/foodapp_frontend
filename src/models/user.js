import mongoose, { Schema, models } from 'mongoose';
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
  },
  { timestamps: true }
);

const User = models.user || mongoose.model('user', UserSchema);
// const User = mongoose.model("user", UserSchema);

export default User;
