
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import NavIconBtn from '../Atoms/NavIconBtn';
import './BtnNavGrid.css';

const BtnNavGrid = (props) => {
  const [isToggled, setToggle] = useState(false);

  /**
   * When nav-icon is clicked trigger this
   * When mouseLeave sidebar trigger this
   * When mouseEnter nav-icon is hovered
   */
  const toggleHandler = () => {
    setToggle(!isToggled);
    document.getElementById('sidebar').classList.toggle('is-in');
    // TODO: Change the nav-icon contents to color white
    // document.getElementById('nav-icon-container').style.color('var(--white)')
  };

  return (
    <React.Fragment>
      
      <div className='nav-icon-container' id='nav-icon-container'>
        <div className='nav-icon' onClick={toggleHandler} onMouseEnter={toggleHandler}>
          <NavIconBtn>&#9776;</NavIconBtn>
        </div>
        <div className="page-title">
          <p>
            MJB
          </p>
        </div>
      </div>

      {/* Sidebar option */}
      <div className='sidebar-container' id='sidebar' onMouseLeave={toggleHandler}>
        <nav className='side-nav'>
          <ul className='nav-links'>
            <li>
              <NavLink className='side-nav-links' exact to='/'>
                <span>
                  Welcome
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className='side-nav-links' to='/home'>
                <span>
                  Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className='side-nav-links' to='/about'>
                <span>
                  About
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className='side-nav-links' to='/portfolio'>
                <span>
                  Portfolio
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className='side-nav-links' to='/styles'>
                <span>
                  Styles
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className='side-nav-links' to='/blog'>
                <span>
                  Blog
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className='side-nav-links' to='/contact'>
                <span>
                  Contact
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      

      {/* Dropdown list option */}
      
      
    </React.Fragment>
  );
}

export default BtnNavGrid;
