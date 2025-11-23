import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.js";

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const ladiesProducts = [
  { name: "Floral Summer Dress", price: 899, image: "/uploads/ladies/dress.png", category: "Ladies" },
  { name: "Casual Crop Top", price: 499, image: "/uploads/ladies/top.png", category: "Ladies" },
  { name: "High Waist Jeans", price: 1199, image: "/uploads/ladies/jeans.png", category: "Ladies" }
];

const importData = async () => {
  await Product.insertMany(ladiesProducts);
  console.log("Ladies Products Imported!");
  process.exit();
};

importData();
