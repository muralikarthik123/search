import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Page2 = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve product data from state
  const product = location.state;

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Cart Page</h1>
      {product ? (
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <h2>Name:{product.name}</h2>
          <p>Storage:{product.storage}</p>
        </div>
      ) : (
        <p>No items in cart</p>
      )}

      <button onClick={handleGoBack}>Go Back to Products</button>
    </div>
  );
};

export default Page2;
