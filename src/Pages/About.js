import React from 'react';

import Portrait from '../Images/portrait.JPG';
import './About.css';

function About() {
  return (
    <div id='about-grid'>

      

      <div id='about-title'>Small Spiel About Me...</div>

      <div id="content">
        <div id="portrait">
          <img src={Portrait} alt="Me"/>
        </div>
        <p id='spiel'>
          Hi, my name is Bill Lee. I'm a young and passionate <span>Full Stack Web Developer</span> with a background in Biophysics looking to create simple, intuitive, and user-friendly web applications. I am proficient in the MERN Stack and looking to expand my knowledge in the web development field.
        </p>
        
        <div id='skills'>
          <h1>Skills</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div> 

    </div>
  )
}

export default About
