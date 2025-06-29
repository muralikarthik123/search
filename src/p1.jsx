import React,{useState} from 'react'

export default function P1() {
    const [data,setData]=useState('')
    const [data1,setData1]=useState('')
    const opens=(e)=>{
        setData(e.target.value)
    }
    const opens1=(e)=>{
        setData1(e.target.value)
    }

    const submits=(e)=>{
        e.preventDefault()
        console.log('username:',data,'Password:',data1)
        setData('')
        setData1('')
    }
  return (
    <div>
      <form onSubmit={submits}>
        <label>Name:</label>
        <input type='text' placeholder='enter the username' value={data} onChange={opens} required/>
        <br/>
        <label>Password:</label>
        <input type='password' placeholder='enter the password' value={data1} onChange={opens1} required/>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  )
}
