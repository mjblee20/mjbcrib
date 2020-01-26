// Import Dependencies
import React from 'react';

// Import Stylings
import './NavBrand.css';

// Import Components
import { NavLink } from 'react-router-dom';

const NavBrand = (props) => {
  return(
    <div>
      <NavLink exact to='/' />
    </div>
  )
}

export default NavBrand;
