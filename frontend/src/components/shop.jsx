import React, { useState } from "react";
import "./shop.css";
import tshirt from "../assest/t-shirt.jpg";
import jacket from "../assest/jackets.jpg";
import hoodie from "../assest/hoodies.jpg";
import hoodie1 from "../assest/hoddie1.png";
import hoodie2 from "../assest/hoodie2.png";
import hoodie3 from "../assest/hoddie3.png";
import pant1 from "../assest/pant1.png";
import pant2 from "../assest/pant2.png";
import pant3 from "../assest/pant3.png";


const products = [
  { id: 1, name: "T-Shirt", price: 499, category: "T-Shirts", image: tshirt },
  { id: 2, name: "Jacket", price: 1499, category: "Jackets", image: jacket },
  { id: 3, name: "Hoodie", price: 999, category: "Hoodies", image: hoodie },
  {id: 4, name: "Green", price: 699, image: hoodie1},
  {id: 5, name: "Grey", price: 999, image: hoodie2},
  {id: 6, name: "yellow Hoodie", price: 559, image: hoodie3},
  {id: 7, name: "Grey pant", price: 899, image: pant1},
  {id: 8, name: "olive pant formal", price: 659,image: pant2},
  {id: 9, name: "Green pant", price: 499, image: pant3}
  
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price;
    if (sortOrder === "highToLow") return b.price - a.price;
    return 0;
  });

  return (
    <div className="shop-container">
      <h1 className="shop-title">🛍️ Our Products</h1>

      <div className="filter-bar">
        <div className="categories">
          {["All", "T-Shirts", "Jackets", "Hoodies", "Pants", "Sneakers", "Accessories"].map(
            (cat) => (
              <button
                key={cat}
                className={`category-btn ${
                  selectedCategory === cat ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            )
          )}
        </div>

        <div className="sort-section">
          <label>Sort by Price: </label>
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="default">Default</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>

      <div className="shop-grid">
        {sortedProducts.map((product) => (
          <div className="shop-card" key={product.id}>
            <img src={product.image} alt={product.name} className="shop-img" />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button className="add-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
