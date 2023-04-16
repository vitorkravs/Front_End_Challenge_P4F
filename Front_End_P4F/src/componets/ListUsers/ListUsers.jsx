import React from 'react'

import './ListUsers.css'

function ListUsers() {
  return (
    <div id='listusers'>
        <ul id='l-users'>
          <li className='l-users--item'>
            <h3>nome:</h3>
            <p>email</p>
            <p>empresa</p>
          </li>
          <li className='l-users--item'>
            <h3>nome:</h3>
            <p>email</p>
            <p>empresa</p>
          </li>
          <li className='l-users--item'>
            <h3>nome:</h3>
            <p>email</p>
            <p>empresa</p>
          </li>
        </ul>
    </div>
  )
}

export default ListUsers