import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Waterfall from './../../../shared/images/waterfall.jpg'
import Styles from './About.module.css';
import AppStyles from './../../../App.module.css';


export class About extends Component {
  render() {
    return (
      <div className={Styles.body}>
        <Row className={AppStyles.sectionTitleRow}>
          <h2 className={AppStyles.sectionTitle}>About</h2>
        </Row>
        <Row>
          <Col>
            <img className={Styles.image}src={Waterfall} alt='waterfall image' />
          </Col>
          <Col>
            <p className={Styles.bio}>
              Hi there! I'm Ming Jung Lee, you can call me Bill. I'm a passionate full stack web developer with a background in Biophysics looking to create intuitive, efficient, and user-friendly interfaces. I have recently completed a full-stack development bootcamp course and currently is looking for a position in which I can quickly absorb new information and learn new skills and apply the knowledge in real world web applications.
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default About;
