import React, { useState, useEffect, useContext } from "react";
import "./shop.css";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const Shop = () => {
  const { addToCart } = useContext(CartContext); // ✅ FIX ADDED

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // FETCH PRODUCTS FROM BACKEND
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data.products);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // CATEGORY FILTER
  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  );

  // SORTING
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price;
    if (sortOrder === "highToLow") return b.price - a.price;
    return 0;
  });

  return (
    <div className="shop-container">
      <h1 className="shop-title">🛍️ Our Products</h1>

      {/* CATEGORY FILTER */}
      <div className="filter-bar">
        <div className="categories">
          {["All", "T-Shirts", "Jackets", "Hoodies", "Pants", "Sneakers", "Accessories"].map(
            (cat) => (
              <button
                key={cat}
                className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* SORTING */}
        <div className="sort-section">
          <label>Sort by Price: </label>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="default">Default</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="shop-grid">
        {sortedProducts.map((product) => (
          <div className="shop-card" key={product._id}>
            <img
              src={`http://localhost:5000${product.image}`}
              alt={product.name}
              className="shop-img"
            />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            {/* ✅ FIXED ADD TO CART BUTTON */}
            <button
              className="add-cart-btn"
              onClick={() =>
                addToCart({
                  id: product._id,     // IMPORTANT FIX
                  name: product.name,
                  price: product.price,
                  image: product.image,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
  