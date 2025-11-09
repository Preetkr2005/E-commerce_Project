import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/cart";
import Shop from "./components/shop";
import LadiesShop from "./components/LadiesShop";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/ladies" element={<LadiesShop />} />
      </Routes>
    </Router>
  );
}

export default App;
