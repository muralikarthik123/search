import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function Integrate() {
    const[data,setData]=useState([])
    const[error,setError]=useState()
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/user').then(
            responce=>setData(responce.data)
        )
        .catch(
          error=>setError("eroor")
        )
    },[])
    

  return (
    <div>
      <p>{error}</p>
      {data.map((item)=><div key={item.id}>
        <p>{item.username}</p>
      </div>)}
    </div>
  )
}
