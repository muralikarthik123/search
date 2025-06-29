import React,{useState} from 'react'

export default function S3() {
    const [data,setData]=useState()
    const [data1,setData1]=useState()
    const values=(e)=>{
        setData(e.target.value)
    }
    const values1=(e)=>{
        setData1(e.target.value)
    }
    const submiting=(e)=>{
        e.preventDefault()
        console.log("username: ",data)
        console.log("password: ",data1)
        setData("")
        setData1("")
    }


  return (
    <div>
      <form onSubmit={submiting}>
        <label>Username:</label>
        <br/>
        <input type='text' value={data} name="data" placeholder='username' onChange={values} required/>
        <br/>
        <label>Password:</label>
        <br/>
        <input type='password' value={data1} name="data1" placeholder='password' onChange={values1}required/>
        <br/>
        <input type="submit"/>
      </form>
      <table>
        <tr>
            <th>S.no</th>
            <th>Username</th>
            <th>Password</th>
        </tr>
        <tr>
            <th>1.</th>
            <th>{data}</th>
            <th>{data1}</th>
        </tr>
        
      </table>
    </div>
  )
}
