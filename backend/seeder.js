import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.js";

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const products = [
  { name: "Classic White T-Shirt", price: 499, image: "/uploads/t-shirt.jpg",category:"mens" },
  { name: "Denim Jacket", price: 1299, image: "/uploads/jackets.jpg",category:"mens" },
  { name: "Black Hoodie", price: 899, image: "/uploads/hoodies.jpg",category:"mens" },
  { name: "Green Hoodie", price: 699, image: "/uploads/hoddie1.png",category:"mens" },
  { name: "Grey Hoodie", price: 999, image: "/uploads/hoodie2.png",category:"mens" },
  { name: "Yellow Hoodie", price: 559, image: "/uploads/hoddie3.png",category:"mens" },
  { name: "Grey Pant", price: 899, image: "/uploads/pant1.png",category:"mens" },
  { name: "Olive pant formal", price: 659, image: "/uploads/pant2.png",category:"mens" },
  { name: "Green pant", price: 499, image: "/uploads/pant3.png",category:"mens" }
];

const importData = async () => {
  await Product.deleteMany();
  await Product.insertMany(products);
  console.log("Data Imported!");
  process.exit();
};

importData();
