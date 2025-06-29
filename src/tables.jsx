import React from 'react'
import './tables.css'
export default function tables() {
  return (
    <div className='table'>
      <tabel>
        <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Age</th>
            <th>class</th>
        </tr>
        <tr>
            <td>1.</td>
            <td>karthik</td>
            <td>23</td>
            <td>b.tech</td>
        </tr>
        <tr>
            <td>2.</td>
            <td>murali</td>
            <td>30</td>
            <td>Degree</td>
        </tr>
        <tr>
            <td>3.</td>
            <td>ram</td>
            <td>35</td>
            <td>Dilpoma</td>
        </tr>
      </tabel>
    </div>
  )
}
