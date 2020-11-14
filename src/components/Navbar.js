import React from 'react';
import './Navbar.css';
import { Avatar } from '@material-ui/core';

function Navbar() {
  return (
    <nav className='nav'>
      <div className='nav__logoblock'>
        <p><span style={{color: 'orange'}}>SMILE</span>SME</p>
        <div className='nav__avatar'>
          <Avatar />
          <div>
            <p style={{color: 'orange'}}>MR.ADMIN</p>
            <p>Head Quarter</p>
          </div>
        </div>
      </div>
      <div className='nav__menu'>
        <span>MENU</span>
        <span>LOGO</span>
      </div>
    </nav>
  )
}

export default Navbar
