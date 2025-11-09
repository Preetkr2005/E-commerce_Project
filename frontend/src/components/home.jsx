import React, { useContext } from "react";
import "./Home.css";
import Navbar from "./navbar";
import { CartContext } from "../context/CartContext";  

import tshirt from "../assest/t-shirt.jpg";
import jacket from "../assest/jackets.jpg";
import hoodie from "../assest/hoodies.jpg";
import hoodie1 from "../assest/hoddie1.png";
import hoodie2 from "../assest/hoodie2.png";
import hoodie3 from "../assest/hoddie3.png";
import pant1 from "../assest/pant1.png";
import pant2 from "../assest/pant2.png";
import pant3 from "../assest/pant3.png";

const Home = () => {
  const { addToCart } = useContext(CartContext);  

  const products = [
    { id: 1, name: "Classic White T-Shirt", price: "₹499", image: tshirt },
    { id: 2, name: "Denim Jacket", price: "₹1299", image: jacket },
    { id: 3, name: "Black Hoodie", price: "₹899", image: hoodie },
    {
      id: 4, name: "Green Hoodie", price: "₹699", image: hoodie1
    },
    {
      id: 5, name: "Grey Hoodie", price: "₹999", image: hoodie2
    },
    {
      id: 6, name: "yellow Hoodie", price: "₹559", image: hoodie3
    },
    {
      id: 7, name: "Grey pant", price: "₹899", image: pant1
    },
    {
      id: 8, name: "olive pant formal", price: "₹659", image: pant2
    },
    {
      id: 9, name: "Green pant", price: "₹499", image: pant3
    }
    
  ];

  return (
    <>
      <Navbar />
      <div className="products-container">
  <h2 className="section-title">Our Latest Collection 🛍️</h2>

  <div className="product-grid">
    {products.map((item) => (
      <div key={item.id} className="product-card">
        <div className="image-container">
          <img src={item.image} alt={item.name} />
          <div className="hover-overlay">
            <button onClick={() => addToCart(item)} className="add-btn">Add to Cart</button>
          </div>
        </div>
        <div className="product-info">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  );
};

export default Home;
