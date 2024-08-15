import React, { useState } from 'react';
import BarcodeScanner from '../components/BarcodeScanner'; // Adjust path as needed

const Home = () => {
  const [scannedProduct, setScannedProduct] = useState(null);

  const handleScan = (product) => {
    setScannedProduct(product);
    // Add to cart logic here
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="text-3xl font-bold mb-6">Scan Product</h1>
      <div className="flex flex-col justify-center items-center">
        <BarcodeScanner onScan={handleScan} />
      </div>
      {scannedProduct && (
        <p className="text-lg mt-6">Scanned Product: {scannedProduct.name}</p>
      )}
    </div>
  );
};

export default Home;