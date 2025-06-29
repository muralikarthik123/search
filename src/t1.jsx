import React,{useState} from 'react'
import Page2 from './t2.jsx'
export default function T1() {
    const [data,setData]=useState('')
    const [old,setnew]=useState([])
    const editing=(e)=>{
        setData(e.target.value)
    }

    const add=(e)=>{
        e.preventDefault()
        console.log(data)
        const all=[...old,data]
        setnew(all)
    }
    const deleting=(indexing)=>{
        const deletee=old.filter((values,index)=>index!==indexing)
        setnew(deletee)
    }
  return (
    <div>
      <form>
        <input type='text' value={data} onChange={editing}/>
        <button onClick={add}>Add</button>
      </form>
      <Page2 passing={old} deleting={deleting}/>
    </div>
  )
}
