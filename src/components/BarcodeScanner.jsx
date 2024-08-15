import React, { useEffect } from 'react';
import Quagga from 'quagga';

const BarcodeScanner = ({ onScan }) => {
  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: 640,
            height: 480,
            facingMode: 'environment', // or user for front-facing camera
          },
        },
        decoder: {
          readers: ['code_128_reader'], // Add other barcode formats as needed
        },
      },
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected((data) => {
      // Here you can handle the data and return the scanned product
      const product = { code: data.codeResult.code, name: 'Sample Product' };
      onScan(product);
    });

    return () => {
      Quagga.stop();
    };
  }, [onScan]);

  return <div id="interactive" className="viewport" />;
};

export default BarcodeScanner;
