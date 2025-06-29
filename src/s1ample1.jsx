import React, { useEffect, useState } from 'react';

export default function Sample1() {
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await new Promise((resolve, reject) => {
          setTimeout(() => {
            const success = false;
            if (success) {
              resolve("data fetched");
            } else {
              reject("failed");
            }
          }, 1000);
        });

        console.log(response);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>hello</p>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
}
