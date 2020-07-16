import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import HomeIcon from './../../Images/Icons/Home Icon Flame.png';
import InfoIcon from './../../Images/Icons/Profile Icon Flame.png';
import WorkIcon from './../../Images/Icons/Work Icon Flame.png';
import ContactIcon from './../../Images/Icons/Contact Icon Flame.png';

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
             <img src={HomeIcon} alt="HomeIcon" height='35px;' width='35px'/>
             {/* TODO: show tooltip when hovered on icon. */}
             {/* <div className="hometooltip">Home</div> */}
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName="selected">
              <img src={InfoIcon} alt="InfoIcon" height='35px;' width='35px'/>
              {/* <div className="infotooltip">About</div> */}
            </NavLink>
          </li>
          <li>
            <NavLink to='/portfolio' activeClassName="selected">
              <img src={WorkIcon} alt="WorkIcon" height='35px;' width='35px'/>
              {/* <div className="worktooltip">Work</div> */}
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName="selected">
              <img src={ContactIcon} alt="ContactIcon" height='35px;' width='35px'/>
              {/* <div className="contacttooltip">Contact</div> */}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
