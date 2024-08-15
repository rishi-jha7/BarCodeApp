import React, { useState } from 'react';
import Cart from '../components/Cart';


const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (code) => {
    setCartItems(cartItems.filter((item) => item.code !== code));
  };

  const updateQuantity = (code, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.code === code ? { ...item, quantity: quantity } : item
      )
    );
  };

  return (
    <div className="cart-page">
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
};

export default CartPage;
