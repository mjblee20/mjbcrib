import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default class BlogView extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={8}>
            <h2>News and Updates</h2>
          </Col>

          <Col>
            <h2>Bookmarks</h2>
          </Col>
        </Row>
        <Row>
          <h2>New Post</h2>
        </Row>
      </div>
    )
  }
}
