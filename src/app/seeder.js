// Import necessary dependencies for your database (e.g., Mongoose for MongoDB).
const mongoose = require('mongoose');
const Product = require("../models/product")
const Category = require("../models/category")
// Define your data to be seeded.
const categoryData = [
  { name: 'Category 1' },
  { name: 'Category 2' },
  // Add more categories as needed
];


// Connect to your database. Replace the connection URL with your own.
mongoose.connect("mongodb+srv://ahmed:bigtimerush@cluster0.toz9i.mongodb.net/hamfoods", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// var categoryIds;
async function seedCategories() {
  try {
    await Category.deleteMany({});
    const insertedCategories = await Category.insertMany(categoryData);
    const categoryIds = insertedCategories.map((category) => category._id);
    console.log('Category IDs:', categoryIds);
  } catch (error) {
    console.error('Error seeding categories:', error);
  } finally {
    mongoose.disconnect();
  }
  const seedData = [
    {
      price: 49.99,
      img: 'product1.jpg',
      name: 'Product 1',
      isFeatured: true,
      catSlug: 'category-1',
      category: categoryIds[0]
    },
    {
      price: 29.99,
      img: 'product2.jpg',
      name: 'Product 2',
      isFeatured: false,
      catSlug: 'category-2',
      category: categoryIds[1]
    },
    {
      price: 79.99,
      img: 'product3.jpg',
      name: 'Product 3',
      isFeatured: true,
      catSlug: 'category-1',
      category: categoryIds[0]
    },
    {
      price: 39.99,
      img: 'product4.jpg',
      name: 'Product 4',
      isFeatured: false,
      catSlug: 'category-3',
      category: categoryIds[1]
    },
  ];

  async function seedDatabase() {
    try {
      // Clean the database by removing all existing records.
      await Product.deleteMany({});
      console.log('Database cleaned.');
  
      // Seed the database with your data.
      await Product.insertMany(seedData);
      console.log('Database seeded.');
  
      // Disconnect from the database.
      mongoose.disconnect();
      console.log('Database connection closed.');
    } catch (error) {
      console.error('Error seeding database:', error);
    }
  }
  seedDatabase()


}








// Run the seeding process when the script is executed with the "seed" argument.
if (process.argv[2] === '--seed') {
  seedCategories()
  // seedDatabase();
}