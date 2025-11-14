import React from "react";
import { useLocation } from "react-router-dom";
import "./searchresults.css";

// Import product images
import tshirt from "../assest/t-shirt.jpg";
import jacket from "../assest/jackets.jpg";
import hoodie from "../assest/hoodies.jpg";
import hoodie1 from "../assest/hoddie1.png";
import hoodie2 from "../assest/hoodie2.png";
import hoodie3 from "../assest/hoddie3.png";
import pant1 from "../assest/pant1.png";
import pant2 from "../assest/pant2.png";
import pant3 from "../assest/pant3.png";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query")?.toLowerCase() || "";

  // Example product list
  const products = [
    { id: 1, name: "Classic White T-Shirt", image: tshirt, category: "men" },
    { id: 2, name: "Denim Jacket", image: jacket, category: "men" },
    { id: 3, name: "Black Hoodie", image: hoodie, category: "men" },
    { id: 4, name: "Green Hoodie", image: hoodie1, category: "men" },
    { id: 5, name: "Grey Hoodie", image: hoodie2, category: "men" },
    { id: 6, name: "Yellow Hoodie", image: hoodie3, category: "men" },
    { id: 7, name: "Grey Pant", image: pant1, category: "men" },
    { id: 8, name: "Olive Formal Pant", image: pant2, category: "men" },
    { id: 9, name: "Green Pant", image: pant3, category: "men" },
  ];

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>

      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">₹999</p>
              <p>Category: {product.category}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results">No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;
