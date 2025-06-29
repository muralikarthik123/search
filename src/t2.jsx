import React from 'react'

export default function T2({passing,deleting}) {
  return (
    <div>
      {passing.map((values,index)=>
    <div key={index}>
        <p>{values}<button onClick={()=>deleting(index)}>delete</button></p>
    </div>)}
    </div>
  )
}
