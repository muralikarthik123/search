import React from 'react';
import Data from './data.json';
import {Link} from 'react-router-dom'
export default function C1({ addToCart }) {
  const cart = (item) => {
    addToCart(item);
  };

  return (
    <div>
      {Data.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Storage: {item.storage}</p>
          <button onClick={() => cart(item)}>Add to cart</button>
          <Link to='/cart'>Page</Link>
        </div>
      ))}
    </div>
  );
}
