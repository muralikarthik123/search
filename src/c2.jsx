import React from 'react';

export default function C2({ data1 }) {
  return (
    <div>
      {data1.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
