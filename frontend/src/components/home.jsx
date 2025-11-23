import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import Navbar from "./navbar";
import { CartContext } from "../context/CartContext";
import axios from "axios";

const Home = () => {
  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="products-container">
        <h2 className="section-title">Our Latest Collection 🛍️</h2>

        <div className="product-grid">
          {products.map((item) => (
            <div key={item._id} className="product-card">
              <div className="image-container">

                {/* Load image from backend */}
                <img
                  src={`http://localhost:5000${item.image}`}
                  alt={item.name}
                />

                <div className="hover-overlay">
                  <button onClick={() => addToCart(item)} className="add-btn">
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="product-info">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
