import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';

import Styles from './About.module.css';
import AppStyles from './../../../App.module.css';


export class About extends Component {
  render() {
    return (
      <div>
        <Row className={AppStyles.sectionTitleRow}>
          <h2 className={AppStyles.sectionTitle}>About</h2>
        </Row>
        <Row>
          {/* Image of Self */}
          {/* Biography/Aim/Summary of Self Like CV */}
          <p className={Styles.bio}>
            Hi there! I'm Ming Jung Lee, you can call me Bill. I'm a passionate full stack web developer with a background in Biophysics looking to create intuitive, efficient, and user-friendly interfaces. I have recently completed a full-stack development bootcamp course and currently is looking for a position in which I can quickly absorb new information and learn new skills and apply the knowledge in real world web applications.
          </p>
        </Row>
      </div>
    )
  }
}

export default About;
