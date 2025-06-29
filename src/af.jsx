import React, { useEffect, useRef,useState } from 'react';
import Data from './data.json'
import './af.css'
export default function AutoFocusInput() {
  const inputRef = useRef(null); // Create a reference
  const [data,setData]=useState()
  const [data3,setData3]=useState()
  useEffect(() => {
    inputRef.current.focus(); // Focus the input when component mounts
  }, []);

  const search=()=>{
    setData3(data)
    setData("")
  }

  return (
    <div className='start'>
        <div className='data1'>
            {Data.filter((responce)=>responce.name.includes(data3)).map((iteam)=>
            <div key={iteam.id}>
                <p>{iteam.dec}</p>
            </div>)}
        </div>
      <input
        type="text"
        ref={inputRef}
        placeholder="ask any thing"
        value={data}
        onChange={(e)=>setData(e.target.value)}
        className='data2'
      />
      <button onClick={search} className='data3'>Search</button>
    </div>
  );
}
