import { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const exist = (id) => cart.find((p) => p.id === id);

  const addItem = (item, quantity = 1) => {
    const productExist = exist(item.id);
    if (productExist) {
      const updatedCart = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // ✅ Cambié removeItem por deleteItem para que coincida con tu componente Cart
  const deleteItem = (id) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  const clearCart = () => setCart([]);

  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const total = () => {
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  };

  
  const checkout = () => {
    console.log("Compra finalizada", cart);
    alert("Gracias por su compra");
    clearCart();
  };

  const values = {
    cart,
    addItem,
    deleteItem, // Antes era removeItem
    clearCart,
    getTotalItems,
    total,      // Antes era getTotalPrice
    checkout
  };

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
};