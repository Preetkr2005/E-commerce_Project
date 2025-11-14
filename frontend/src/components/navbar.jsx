import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import cartImg from "../assest/carts.png";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      // Navigate to search page or filter items
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Clothify</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        <li className="dropdown">
          <span className="dropdown-title">Shop</span>
          <ul className="dropdown-menu">
            <li><Link to="/shop/men">Men</Link></li>
            <li><Link to="/shop/ladies">Ladies</Link></li>
          </ul>
        </li>

        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* 🔍 Search Bar */}
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

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
