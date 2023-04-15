import React from 'react'

import './Header.css'

import Logo from '../../Image/logo_exemplo.png'

function Header() {
  return (
    <div>
        <header> 
            <img src={Logo} alt="Logo" />
        </header>
    </div>
  )
}

export default Header