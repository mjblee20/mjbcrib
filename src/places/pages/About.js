import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Waterfall from './../../shared/images/waterfall.jpg'
import './About.css';


export class About extends Component {
  render() {
    return (
      <div className=''>
        <Row className=''>
          <h2 className=''>About</h2>
        </Row>
        <Row>
          <Col>
            <img className='image'src={Waterfall} alt='waterfall' />
          </Col>
          <Col>
            <p className='bio'>
              Hi there! I'm Ming Jung Lee, you can call me Bill. I'm a passionate full stack web developer with a background in Biophysics looking to create intuitive, efficient, and user-friendly interfaces. I have recently completed a full-stack development bootcamp course and currently is looking for a position in which I can quickly absorb new information and learn new skills and apply the knowledge in real world web applications.
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default About;
