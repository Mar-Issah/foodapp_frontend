// categorySeeder.js

const mongoose = require('mongoose');
const Category = require('../models/category'); // Import your Category model
const Product = require("../models/product")
const categoryData = [
    { name: 'Category 1' },
    { name: 'Category 2' },
    // Add more categories as needed
];


async function seedCategories() {
    try {
        await mongoose.connect('mongodb+srv://ahmed:bigtimerush@cluster0.toz9i.mongodb.net/hamfoods', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await Category.deleteMany({});
        const insertedCategories = await Category.insertMany(categoryData);
        const categoryIds = insertedCategories.map((category) => category._id);
        console.log('Category IDs:', categoryIds);

        // Use the category IDs here or pass them to the product seeding script
        // For example, you can call a function to seed products with these IDs.
        seedProducts(categoryIds);
    } catch (error) {
        console.error('Error seeding categories:', error);
    } 
}

async function seedProducts(categoryIds) {
    // Now, you can use the categoryIds in your product seeding logic.
    //   const Product = require('../models/Product'); Import your Product model
    await mongoose.connect('mongodb+srv://ahmed:bigtimerush@cluster0.toz9i.mongodb.net/hamfoods', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const productData = [
        {
            price: 49.99,
            img: 'product1.jpg',
            name: 'Product 1',
            isFeatured: true,
            catSlug: 'category-1',
            category: categoryIds[0], // Use the first category ID
        },
        {
            price: 29.99,
            img: 'product2.jpg',
            name: 'Product 2',
            isFeatured: false,
            catSlug: 'category-2',
            category: categoryIds[1], // Use the second category ID
        },
        // Add more products with the corresponding category IDs
    ];


    async function seedProducts() {
        try {
            
            await Product.deleteMany({});
            await Product.insertMany(productData);
            console.log('Products seeded successfully.');
        } catch (error) {
            console.error('Error seeding products:', error);
        } finally {
            mongoose.disconnect();
        }
    }

    seedProducts();
}

seedCategories();
