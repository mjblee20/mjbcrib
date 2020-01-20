import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Waterfall from '../../shared/images/waterfall.jpg'
import './About.css';


export class About extends Component {
  render() {
    return (
      <div id='about-content'>
        
        <Row id='about-header'>
          <h1>About Me</h1>
        </Row>

        <div className='container'>
          <Row>
            
            <Col>
              <img className='image'src={Waterfall} alt='waterfall' />
            </Col>

            <Col id='bio-content'>
              <p id='bio'>
                Hi there! I'm Ming Jung Lee, you can call me Bill. I'm a passionate full stack web developer with a background in Biophysics looking to create intuitive, efficient, and user-friendly interfaces. I have recently completed a full-stack development bootcamp course and currently is looking for a position in which I can quickly absorb new information and learn new skills and apply the knowledge in real world web applications.
              </p>
            </Col>

          </Row>

          <Row>
            
            <Col>
              <h2>Mission</h2>
            </Col>

            <Col>
              <p>More Image</p>
            </Col>

          </Row>
        </div>
      </div>
    )
  }
}

export default About;
