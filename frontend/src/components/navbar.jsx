import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import cartImg from "../assest/carts.png"; // import your cart image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Clothify</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-right">
        <Link to="/cart">
          <img src={cartImg} alt="Cart" className="cart-img" />
        </Link>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="signup-btn">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
