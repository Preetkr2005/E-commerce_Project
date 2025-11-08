import React, { useContext } from "react";
import "./Home.css";
import Navbar from "./navbar";
import { CartContext } from "../context/CartContext";  // ✅ import context

import tshirt from "../assest/t-shirt.jpg";
import jacket from "../assest/jackets.jpg";
import hoodie from "../assest/hoodies.jpg";

const Home = () => {
  const { addToCart } = useContext(CartContext);  // ✅ get addToCart function

  const products = [
    { id: 1, name: "Classic White T-Shirt", price: "₹499", image: tshirt },
    { id: 2, name: "Denim Jacket", price: "₹1299", image: jacket },
    { id: 3, name: "Black Hoodie", price: "₹899", image: hoodie }
  ];

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1 className="home-title">Our Latest Collection 👕</h1>
        <div className="product-grid">
          {products.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button> {/* ✅ fixed */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
