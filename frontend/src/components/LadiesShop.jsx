import React, { useState, useEffect, useContext } from "react";
import "./LadiesShop.css";
import Navbar from "./navbar";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const LadiesShop = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchLadies = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/ladies");

        // 🟢 FIX: ALWAYS CHECK response PRODUCTS
        setProducts(res.data.products || []);
        console.log("Ladies products:", res.data.products);
      } catch (err) {
        console.log("Error fetching ladies products:", err);
        setProducts([]); // prevent crash
      }
    };

    fetchLadies();
  }, []);

  return (
    <>
      <Navbar />
      <div className="ladies-container">

        <div className="ladies-banner">
          <h1>Elegance. Comfort. Confidence.</h1>
          <p>Discover the latest trends for women.</p>
        </div>

        <div className="ladies-grid">
          {products.length === 0 ? (
            <p>No ladies products found.</p>
          ) : (
            products.map((item) => (
              <div key={item._id} className="ladies-card">
                <img
                  src={`http://localhost:5000${item.image}`}
                  alt={item.name}
                />
                <div className="ladies-info">
                  <h3>{item.name}</h3>
                  <p className="price">₹{item.price}</p>

                  <button
                    onClick={() =>
                      addToCart({
                        id: item._id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                      })
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default LadiesShop;
