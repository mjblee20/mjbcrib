import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/blog">Blog</NavLink>
    </li>
    <li>
      <NavLink to="/portfolio">Portfolio</NavLink>
    </li>
    <li>
      <NavLink to="/members">Members</NavLink>
    </li>
    <li>
      <NavLink to="/auth">AUTHENTICATE</NavLink>
    </li>
  </ul>
};

export default NavLinks;