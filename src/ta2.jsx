import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Ta2() {
    const location=useLocation();
    const products =location.state;

  return (
    <div>
      {products? (
        <div>
          <p>products:{products.name}</p>
          <p>products:{products.storage}</p>
        </div>
      ):(
        <div>
          <p>Empty cart</p>
        </div>
      )}
    </div>
  )
}
