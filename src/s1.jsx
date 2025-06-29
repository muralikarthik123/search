import React from 'react'

export default function s1({sending,delete1}) {
  return (
    <div>
        {sending.map((values,index)=>
        <div key={index}>
            <p>{values}<button onClick={()=>delete1(index)}>Delete</button></p>
        </div>)}
    </div>
  )
}
