import React,{useState} from 'react'
import './sample.css'
export default function Sample() {
  const [data,setData]=useState()
  const open=()=>{
    setData(true)
  }
  const close=()=>{
    setData(false)
  }

  return (
    <div className='sample'>
      <button onClick={open}>Open</button>
      <button onClick={close}>Close</button>
      <div className={data?'yes':'no'}>
          <p>opended</p>
      </div>
    </div>
  )
}
