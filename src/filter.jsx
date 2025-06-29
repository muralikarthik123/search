import React,{useState} from 'react'
import Data from './data.json'
export default function Filter() {
    const [data,setData]=useState("")
    const open=(e)=>{
        setData(e.target.value)
    }
  return (
    <div>
        <input type='text' value={data} onChange={open}/>
      {Data.filter(filtering=>filtering.name.toLowerCase().includes(data.toLowerCase()) ||filtering.collage.toLowerCase().includes(data.toLowerCase()) ).map((iteam)=> 
      <div key={iteam.id} style={{border:'1px solid black'}}> 
        <p>Name:{iteam.name}</p>
        <p>Collage:{iteam.collage}</p>
      </div>
    )}
    </div>
  )
}
