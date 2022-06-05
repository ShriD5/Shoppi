import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <CartContext.Provider value={{ cartOpen, setCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};
