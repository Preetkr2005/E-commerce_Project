import Product from "../models/product.js";

export const createProduct = async (req, res) => {
  try {
    const { name, price,category } = req.body;
    const image = `/uploads/ladies/${req.file.filename}`; // multer gives req.file

    const product = await Product.create({
      name,
      price,
      category,
      image
    });

    res.status(201).json({
      message: "Product uploaded successfully",
      product
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLadiesProducts = async (req, res) => {
  try {
      const products = await Product.find({
      category: { $regex: /^ladies$/i }
    });
    res.json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GLOBAL SEARCH
export const searchProducts = async (req, res) => {
  try {
    let query = req.query.query;

    if (!query || typeof query !== "string") {
      query = "";
    }

    const products = await Product.find({
      name: { $regex: query, $options: "i" }
    });

    res.json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




