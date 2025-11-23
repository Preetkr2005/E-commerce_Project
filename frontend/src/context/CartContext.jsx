import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

const addToCart = (item) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find(
      (cartItem) => cartItem._id === item._id
    );

    if (existingItem) {
      return prevCart.map((cartItem) =>
        cartItem._id === item._id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      const numericPrice =
        typeof item.price === "string"
          ? parseInt(item.price.replace(/[^\d]/g, ""), 10)
          : item.price;

      const fullImage = item.image?.startsWith("http")
        ? item.image
        : `http://localhost:5000${item.image}`;

      return [
        ...prevCart,
        {
          ...item,
          image: fullImage,
          price: numericPrice,
          quantity: 1,
        },
      ];
    }
  });
};

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item._id !== id)
    );
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id
          ? { ...item, quantity: Math.max(quantity, 1) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
