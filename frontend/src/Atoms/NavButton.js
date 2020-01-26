// Import Dependencies
import React from 'react';

// Import Stylings
import './NavButton.css';

// Import Components
import { NavLink } from 'react-router-dom';

/**
 * 
 * @param {Object} props 
 */
const NavButton = (props) => {
  return(
    <div className='nav-btn'>
      <NavLink to={props.route}>
        {props.children}
      </NavLink>
    </div>
  )
}

export default NavButton;
