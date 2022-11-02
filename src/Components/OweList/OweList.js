import React from 'react'
import './OweList.css'
import userlogo3 from './../../Assets/userlogo3.png'

function OweList({imgsrc,name,amount}) {
  return (
    <div>
        <li className="box">
            <a>
                <img src={userlogo3} alt="" />
                <div>{name}</div>
                <div>{amount}</div>
            </a>
        </li>
    </div>
  )
}

export default OweList
