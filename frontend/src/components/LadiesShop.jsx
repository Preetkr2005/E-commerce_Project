import React, { useContext } from "react";
import "./LadiesShop.css";
import Navbar from "./navbar";
import { CartContext } from "../context/CartContext";

// Import ladies product images
import dress from "../assest/ladies/Dress.png";
import top from "../assest/ladies/tops.png";
import jeans from "../assest/ladies/jeans.png";

const LadiesShop = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 101, name: "Floral Summer Dress", price: "₹899", image: dress },
    { id: 102, name: "Casual Crop Top", price: "₹499", image: top },
    { id: 103, name: "High Waist Jeans", price: "₹1199", image: jeans },
  ];

  return (
    <>
      <Navbar />
      <div className="ladies-container">
        <div className="ladies-banner">
          <h1>Elegance. Comfort. Confidence.</h1>
          <p>Discover the latest trends for women.</p>
        </div>

        <div className="ladies-grid">
          {products.map((item) => (
            <div key={item.id} className="ladies-card">
              <img src={item.image} alt={item.name} />
              <div className="ladies-info">
                <h3>{item.name}</h3>
                <p className="price">{item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LadiesShop;
