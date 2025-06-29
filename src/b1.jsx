import React,{useEffect, useState} from 'react'
import axios from 'axios'
export default function B1() {
    const[data,setData]=useState([])
    const [data1,setData1]=useState(" ")
    const values=(e)=>{
        setData1(e.target.value)
    }
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            responce=>setData(responce.data)
        )
    },[])
  return (
    <div>
        <input type='text' placeholder='enter the value' value={data1} onChange={values}/>
      {data.filter((responce)=>responce.name.toUpperCase().includes(data1.toUpperCase())).map((iteam)=>
    <div key={iteam.id}>
        <p>Name:{iteam.name}</p>
        <p>email:{iteam.email}</p>
    </div>)}
    </div>
  )
}
