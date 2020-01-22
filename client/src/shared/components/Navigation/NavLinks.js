import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/blog">Blog</NavLink>
    </li>
    <li className='dropdown' >
      <NavLink to="/portfolio">Portfolio</NavLink>
      <div className='dropdown-content'>
        <Link className='dropdown-links' to='/portfolio'>Projects</Link>
        <Link className='dropdown-links' to='/portfolio/playground'>Playground</Link>
        <Link className='dropdown-links' to='/portfolio/sideprojects'>Side Projects</Link>
      </div>
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