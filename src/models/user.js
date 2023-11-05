import mongoose, { Schema, models } from 'mongoose';
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    fullname: {
      type: String,
      required: [true, 'Name is required'],
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = models.user || mongoose.model('user', UserSchema);
// const User = mongoose.model("user", UserSchema);

export default User;
