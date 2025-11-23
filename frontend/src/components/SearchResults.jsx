import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./searchresults.css";

import { CartContext } from "../context/CartContext";

const SearchResults = () => {
  const location = useLocation();
  const query =
    new URLSearchParams(location.search).get("query")?.toLowerCase() || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cart Context
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products/search?query=${query}`
        );
        setProducts(res.data.products || []);
      } catch (error) {
        console.log("Search error:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>

      {products.length > 0 ? (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={`http://localhost:5000${product.image}`}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p className="price">₹{product.price}</p>

              {/* Add To Cart Button */}
              <button
                onClick={() => addToCart(product)}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
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
