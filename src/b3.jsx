import React,{useState} from 'react'

export default function B3() {
    const[data,setData]=useState('')
    const[old,setNew]=useState([])
    const open=(e)=>{
      e.preventDefault()
      setData(e.target.value)
    }
    const submits=(e)=>{
      e.preventDefault()
      const all=([...old,data])
      setNew(all)
    }

    const deleting=(indexs)=>{
      const deleted=old.filter((iteam,index)=>index!==indexs)
      setNew(deleted)
    }

  return (
    <div>
      <form onSubmit={submits}>
        <input type='text' placeholder='enter the data' value={data} onChange={open} required/>
        <button>Submit</button>
        {old.map((iteam,index)=>
        <div key={index}>
            <p>{iteam}<button onClick={()=>deleting(index)}>Delete</button></p>
        </div>)}
      </form>
      
    </div>
  )
}
