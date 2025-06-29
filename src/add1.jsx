import React,{useState} from 'react'

export default function Add1() {
  const [data,setData]=useState(false)
  const nav=()=>{
    setData(!data)
  }
  return (
    <div>
      <buttton onClick={nav}>Nav</buttton>
      {data?<p>nav bar opened</p>:<p></p>}
    </div>
  )
}
