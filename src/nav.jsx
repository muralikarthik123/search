import React,{useState} from 'react'
import './nav.css'
export default function Nav() {
    const [data,setData]=useState(false)
    const open=()=>{
        setData(!data)
    }
    

  return (
    <div>
        <button className='bt1' onClick={open}>Nav</button>
      <ul className={data? 'mob':'lap'}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}
