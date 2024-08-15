import React from 'react';
import Checkout from '../components/Checkout';


const CheckoutPage = ({ cartItems }) => {
  return (
    <div className="checkout-page">
      <Checkout cartItems={cartItems} />
    </div>
  );
};

export default CheckoutPage;
