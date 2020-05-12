import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div id='nav'>
      {/* TODO: Implement animations for menu icon to drop down */}
      <div id="nav-dropdown">
        <div id="icon-container">
          <div id="nav-icon">
            <div id="bar1"></div>
            <div id="bar2"></div>
            <div id="bar3"></div>
          </div>
        </div>
    
        <ul className='dropdown-content noStyle'>
          <li><NavLink exact to='/' activeClassName="selected">Home</NavLink></li>
          <li><NavLink to='/about' activeClassName="selected">About</NavLink></li>
          <li><NavLink to='/portfolio' activeClassName="selected">Portfolio</NavLink></li>
          <li><NavLink to='/contact' activeClassName="selected">Contact</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
