import React,{useState} from 'react'

export default function Forms() {
    const[name,setName]=useState('')
    const[password,setpass]=useState('')
    const[error,seterror]=useState('')
    const[error1,seterror1]=useState('')
    const sending=(e)=>{
        setName(e.target.value)
    }
    const sending1=(e)=>{
        setpass(e.target.value)
    }

    const submiting=(e)=>{
        e.preventDefault()
        if(name.length===0 ){
            seterror('This input field is required')
        }
        if(password.length===0 ){
            seterror1('This input field is required')
        }
        if(name.length>0 && password.length>0){
            seterror('')
            seterror1('')
            console.log(name)
            console.log(password)
            setName('')
            setpass('')
        }
        if(name.length>0 ){
            seterror('')
            if(password.length===0){
                seterror1('This input field is required')
            }
        }
        if( password.length>0 ){
            seterror1('')
            if(name.length===0){
                seterror('This input field is required')
            }
        }
        
        
    }
  return (
    <div>
      <form>
        <label>Name:</label>
        <br/>
        <input type='text' placeholder='name' value={name} onChange={sending} required/>
        <br/>
        <p style={{color:'red'}}>{error}</p>
        <label>Password:</label>
        <br/>
        <input type='password' placeholder='password' value={password} onChange={sending1}/>
        <br/>
        <p style={{color:'red'}}>{error1}</p>
        <button onClick={submiting}>Submit</button>
      </form>
    </div>
  )
}
