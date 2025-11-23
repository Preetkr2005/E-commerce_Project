import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert(`Welcome back, ${res.data.user.name}!`);  

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
