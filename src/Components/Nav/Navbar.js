import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import HomeIcon from './../../Images/WhiteHouse.png';
import WorkIcon from './../../Images/WhiteBriefCase.png';
import ContactIcon from './../../Images/WhiteEnvelop.png';

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
          <li>
            <NavLink exact to='/' activeClassName="selected">
             <img src={HomeIcon} alt="HomeIcon" height='50px;' width='50px'/>
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName="selected">
              About
              {/* <img src={HomeIcon} alt="HomeIcon"/> */}
            </NavLink>
          </li>
          <li>
            <NavLink to='/portfolio' activeClassName="selected">
              <img src={WorkIcon} alt="HomeIcon"  height='50px;' width='50px'/>
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName="selected">
              <img src={ContactIcon} alt="HomeIcon"  height='50px;' width='50px'/>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
