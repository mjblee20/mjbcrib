import React from 'react';

import './Main.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div id="main-grid">
      <div id="main-sect">
        <div id="main-title">
          <p>
            Hi,
            <br/> 
            I'm Bill.
            <br/>
          </p>
          <br/>
          <p id="main-description">I'm a young and passionate Full Stack Web Developer with a background in Biophysics looking to create simple, intuitive, and user-friendly web applications. I am proficient in the MERN Stack and looking to expand my knowledge in the web development field.</p>
        </div>
      </div>
      <div id="btn-sect">
        <ul id="btn-sect" className='noStyle'>
          <li><Link to="/portfolio">View My Work</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Main;
