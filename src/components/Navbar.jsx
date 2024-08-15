import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleLinkClick = (event) => {
    // Add any logic needed when a link is clicked, e.g., tracking
    console.log('Link clicked:', event.target.textContent);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 inset-x-0 shadow-md z-50">
      <div className="container mx-auto flex justify-center">
        <Link
          to="/"
          className="mx-4 text-lg font-semibold hover:text-gray-300 transition"
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link
          to="/cart"
          className="mx-4 text-lg font-semibold hover:text-gray-300 transition"
          onClick={handleLinkClick}
        >
          Cart
        </Link>
        <Link
          to="/checkout"
          className="mx-4 text-lg font-semibold hover:text-gray-300 transition"
          onClick={handleLinkClick}
        >
          Checkout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
