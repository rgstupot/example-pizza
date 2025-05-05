import { createContext, useContext, useState } from "react";

const testCart = [
  {
    id: 1,
    pizzaName: "Build Your Own",
    size: "large",
    toppings: ["pepperoni","mushrooms"],
    quantity: 2,
    price: 11.99
  }
]

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(testCart);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const editCartItem = (itemId, updates) => {
    setCartItems(currentCart => currentCart.map(item => item.id === itemId ? {...item, ...updates } : item))
  }

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
