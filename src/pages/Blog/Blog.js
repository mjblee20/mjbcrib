import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Styles from './Blog.module.css';
import AppStyles from './../../App.module.css';

export class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      title: '',
      content: '',
    };
  }

  render() {
    return (
      <div>
        <Row className={AppStyles.sectionTitleRow}>
          <h2 className={AppStyles.sectionTitle}>Blog</h2>
        </Row>
        <Row>
          <Col>

          </Col>

          <Col>
          
          </Col>
        </Row>
      </div>
    )
  }
}

export default Blog;