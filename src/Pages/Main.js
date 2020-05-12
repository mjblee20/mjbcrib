import React from 'react';

import './Main.css';
import Coffee from '../Images/coffee.png';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div id="main-grid">

      <div id="main-sect">
        <div id="main-title">

          <p>
            Hi,
            <br/> 
            {/* TODO: Animate Bill */}
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
        {/* TODO: Animate Buttons */}
        <ul id="btn-sect" className='noStyle'>
          <li><Link to="/portfolio">View My Work</Link></li>
          <li><Link to="/contact">Hire Me</Link></li>
        </ul>
      </div>

      <img src={Coffee} alt="a sketch of a coffee cup" id="main-image"/>
      
    </div>
  )
}

export default Main;
