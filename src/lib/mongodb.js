import mongoose from 'mongoose';

const DB_URI = 'mongodb+srv://Marsiya:Database@cluster0.mjusc.mongodb.net/ham_food?retryWrites=true&w=majority';
export const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('connected to mongodb');
  } catch (error) {
    console.log('error connecting to database');
  }
};
