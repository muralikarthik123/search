import React from 'react';
import { useNavigate } from 'react-router-dom';
import Data from "./data.json";

const Page1 = () => {

  
  // When adding a single it
  const nav=useNavigate()
  const handleAddToCart=(item)=>{
    alert(`${item.name} is added to cart`)
    nav('/cart',{state:item})
  }

  return (
    <div>
      <h1>Products Page</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
        {Data.map((item) => (
          <div key={item.id} style={{ marginBottom: '15px' }}>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Storage:</strong> {item.storage}</p>
            {/* Add to Cart button for each product */}
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page1;
