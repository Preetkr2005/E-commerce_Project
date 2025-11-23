import express from "express";
import { 
  createProduct, 
  getProducts, 
  getLadiesProducts,
  searchProducts
} from "../Controllers/productController.js";

import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/upload", upload.single("image"), createProduct);

router.get("/", getProducts);

router.get("/ladies", getLadiesProducts);

router.get("/search", searchProducts);

export default router;
