import React,{useState} from 'react'

export default function Tabs() {
    const [data,setData]=useState('1')
    const open=(e)=>{
        setData(e)
    }
  return (
    <div>
      <button onClick={()=>open('1')}>bt1</button>
      <button onClick={()=>open('2')}>bt2</button>
      <button onClick={()=>open('3')}>bt3</button>

      {data==='1' &&
      <div>
        <p>one</p>
      </div>
      }
      {data==='2' &&
      <div>
        <p>two</p>
      </div>
      }
      {data==='3' &&
      <div>
        <p>thired</p>
      </div>
      }
    </div>
  )
}
