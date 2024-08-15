import React, { useState } from 'react';

const Checkout = ({ cartItems }) => {
  const [paymentInfo, setPaymentInfo] = useState({});

  const handleInputChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    console.log('Payment info:', paymentInfo);
    console.log('Cart items:', cartItems);
    // Implement payment processing logic here
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleCheckout} className="space-y-4">
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="expiry"
          placeholder="Expiry Date"
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="cvc"
          placeholder="CVC"
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;
