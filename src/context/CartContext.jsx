import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      pizzaName: "Build Your Own",
      toppings: ["pepperoni", "banana peppers", "mushrooms", "olives", "bacon"],
      size: "Large",
      price: 12.79,
      quantity: 2,
    },
    {
      id: 2,
      pizzaName: "Build Your Own",
      toppings: ["pepperoni", "banana peppers", "mushrooms", "olives", "bacon"],
      size: "Large",
      price: 12.79,
      quantity: 1,
    },
  ]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const addQuantity = (itemId) => {
    console.log(itemId);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, addQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

export default CartContext;
