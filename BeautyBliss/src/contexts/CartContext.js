import React, { createContext, useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Initial cart loaded:", savedCart);
    return savedCart;
  });
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // Save cart to localStorage (debounced to avoid frequent writes)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Saving cart to localStorage:", cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    }, 500); // Debounce for 500ms
    return () => clearTimeout(timeoutId);
  }, [cart]);

  // Calculate itemAmount and total
  useEffect(() => {
    console.log("Calculating itemAmount and total...");
    const amount = cart.reduce((accumulator, currentItem) => accumulator + currentItem.amount, 0);
    const newTotal = cart.reduce((accumulator, currentItem) => accumulator + currentItem.price * currentItem.amount, 0);
    setItemAmount(amount);
    setTotal(newTotal);
  }, [cart]);

  // Add to cart
  const addToCart = useCallback((product, id) => {
    console.log("Adding to cart:", product);
    setCart((prevCart) => {
      const cartItem = prevCart.find((item) => item.id === id);
      if (cartItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, amount: cartItem.amount + 1 } : item
        );
      }
      return [...prevCart, { ...product, amount: 1 }];
    });

    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  }, []);

  // Remove from cart
  const removeFromCart = useCallback((id) => {
    console.log("Removing from cart:", id);
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }, []);

  // Clear cart
  const clearCart = useCallback(() => {
    console.log("Clearing cart");
    setCart([]);
  }, []);

  // Increase item amount
  const increaseAmount = useCallback((id) => {
    console.log("Increasing amount for:", id);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  }, []);

  // Decrease item amount
  const decreaseAmount = useCallback((id) => {
    console.log("Decreasing amount for:", id);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, amount: Math.max(1, item.amount - 1) } : item
      )
    );
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;