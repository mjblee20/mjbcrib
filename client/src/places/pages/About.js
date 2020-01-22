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
        <Jumbotron id='welcome'>
          <h1 className='titleHead'>Welcome to MJB_Crib</h1>
          <br />
          <p className='description'>This website will be a place where I put all my work and projects in.</p>
          <hr className="my-2" />
          <p>Below is the list of my skillsets:</p>
          <BubbleClump />

          <div className='btnRightAlign'> 
            <Button className='portfolioBtn' href='/portfolio' variant='info'>View Portfolio</Button>
          </div>
        </Jumbotron>

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
