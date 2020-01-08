import React from 'react';

import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

import Styles from './Resume.module.css';
// import AppStyles from './../../App.module.css';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    // {/* Setting the 'state' of the Component */}
    // {/* (DEFINITION) state == the memory of information currently rendered on screen */}
    this.state = {
      activity: '',
      duration:'',

    };
  }
  render() {
    return (
        <div>
          <div className={Styles.links}>
            <div id='github'>
              {/* TODO: get Github Icon */}
              <Button href="https://github.com/mjblee20" variant='dark'>My GitHub</Button>
            </div>
            <div id='linkedin'>
              {/* TODO: get linkedin Icon */}
              <Button href="https://www.linkedin.com/in/mjblee20/" variant='dark'>My LinkedIn</Button>
            </div>
          </div>
          <br />
          <div id='resume'>
            <h1 className={Styles.name}>Bill Lee</h1>
            <h6 className={Styles.info}> mjblee20@outlook.com | Bellevue, WA | (206)-954-9043 </h6>

            <div className={Styles.education}>
              <h3>Education</h3>
              <hr/>
            </div>
            <div className={Styles.experience}>
              <h3>Experience</h3>
              <hr/>
            </div>
            <div className={Styles.projects}>
              <h3>Projects</h3>
              <hr/>

              <h4>Elevated</h4>
              <p>A novel web and mobile application intended to improve in-network communication in growing marijuana industry</p>
              <ul>
                <li>Developed database established API routes, and created front-end web pages</li>
                <li>Tools used: React, MySQL, Sequelize, Express, NodeJS</li>
              </ul>
              <Button>GitHub</Button>
              <Button>Link</Button>

              <h4>In or Out</h4>
              <p>A web application developed to assist user-indecisiveness in meal planning</p>
              <ul>
                <li>Developed dine-out restaurant options page and API requests to Yelp API</li>
                <li>Tools used: HTML, CSS, AJAX, JSON</li>
              </ul>
              <Button>GitHub</Button>
              <Button>Link</Button>

              <h4>MJB_Crib</h4>
              <p>A web application to host my portfolio</p>
              <Button>GitHub</Button>
              <Button>Link</Button>
            </div>
            <div className={Styles.skills}>
              <h3>Skills and Qualifications</h3>
              <hr/>
              <ul>
                <li>Proficient in Microsoft Office Suite, Mathematica, Igor, Image J, data collection, data analysis, sterile lab maintenance, and microscopy</li>
                <li>Adequate knowledge of R, Python, PHP, SQL, PCR and plasmid DNA purification</li>
                <li>Self-motivated and detail-oriented in adopting and integrating new material</li>
                <li>Strong written and verbal communication skills</li>
                <li>Fluent in Mandarin Chinese, English, and Taiwanese</li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

export default Resume;