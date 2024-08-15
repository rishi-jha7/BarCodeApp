import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 inset-x-0 shadow-md">
      <div className="container mx-auto flex justify-center">
        <Link
          to="/"
          className="mx-4 text-lg font-semibold hover:text-gray-300 transition"
        >
          Home
        </Link>
        <Link
          to="/cart"
          className="mx-4 text-lg font-semibold hover:text-gray-300 transition"
        >
          Cart
        </Link>
        <Link
          to="/checkout"
          className="mx-4 text-lg font-semibold hover:text-gray-300 transition"
        >
          Checkout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
