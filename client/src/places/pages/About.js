import React, { Component } from 'react';

import BubbleClump from './../components/BubbleClump'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
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
            
            <Col xs={12} md={6}>
              <img className='image'src={Waterfall} alt='waterfall' />
            </Col>

            <Col xs={12} md={6} id='bio-content'>
              <p id='bio'>
                Hi there! I'm Ming Jung Lee, you can call me Bill. I'm a passionate full stack web developer with a background in Biophysics looking to create intuitive, efficient, and user-friendly interfaces. I have recently completed a full-stack development bootcamp course and currently is looking for a position in which I can quickly absorb new information and learn new skills and apply the knowledge in real world web applications.

                Below is the list of my skillsets:
              </p>
              {/* <BubbleClump /> */}
            </Col>

          </Row>
        </div>
      </div>
    )
  }
}

export default About;
