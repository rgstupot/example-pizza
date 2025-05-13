import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const editCartItem = (itemId, updates) => {
    setCartItems((currentCart) =>
      currentCart.map((item) =>
        item.id === itemId ? { ...item, ...updates } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, editCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

export default CartContext;
