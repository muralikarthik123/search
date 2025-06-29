import React,{useState} from 'react'

export default function Home() {
    const[data,setData]=useState(0)
    const add=()=>{
        setData(data+1)
    }
    const min=()=>{
        setData(data-1)
    }
    const zero=()=>{
        setData(0)
    }

  return (
    <div>
        <p>{data}</p>
      <button onClick={add}>Add</button>
      <button onClick={min}>Min</button>
      <button onClick={zero}>Zero</button>
    </div>
  )
}
