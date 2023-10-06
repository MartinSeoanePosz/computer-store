import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext(null);

// export const useCart = () => {
//   return useContext(CartContext);
// };

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const index = cart.findIndex((i) => i.item.name === item.name);

    if (index !== -1) {
      // If item is already in cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[index].quantity = quantity;
      setCart(updatedCart);
  } else {
      // If item is not in cart, add it with the given quantity
      setCart([...cart, { item, quantity }]);
  }
};


  const removeFromCart = (name) => {
    const updatedCart = cart.filter((product) => product.item.name !== name);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};