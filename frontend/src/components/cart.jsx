import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/navbar";
import "./cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  // ✅ Ensure prices are numbers before calculation
  const total = cart.reduce((sum, item) => {
    const numericPrice = parseInt(item.price);
    return sum + numericPrice * (item.quantity || 1);
  }, 0);

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h1 className="cart-title">Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty 🛒</p>
        ) : (
          <div className="cart-container">
            <div className="cart-list">
              {cart.map((item) => {
                const numericPrice = parseInt(item.price);
                const subtotal = numericPrice * item.quantity;

                return (
                  <div key={item.id} className="cart-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-img"
                    />

                    <div className="cart-details">
                      <h3>{item.name}</h3>
                      <p className="cart-price">₹{numericPrice}</p>

                      {/* Quantity Selector */}
                      <div className="quantity-control">
                        <button
                          className="qty-btn"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          −
                        </button>
                        <span className="qty-display">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      <p className="subtotal">Subtotal: ₹{subtotal}</p>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      🗑 Remove
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <p>Total items: {cart.length}</p>
              <p>Total amount: ₹{total}</p>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
