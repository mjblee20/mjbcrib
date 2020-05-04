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
            I'm <span id="name">Bill.</span> 
            <br/>
            Junior Web Developer
          </p>

          <div id="main-description">
            <ul className="noStyle">
              <li>UW Biophysics Grad</li> /
              <li>Full-Stack Web Developer</li> /
              <li>Coffee Lover</li>
            </ul>
          </div>

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
