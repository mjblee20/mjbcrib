import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BlogView from './../components/BlogView';

import './Blog.css';

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
        <Row className='sectionTitleRow'>
          <h2 className='sectionTitle'>Blog</h2>
        </Row>
        
        <BlogView />
      </div>
    )
  }
}

export default Blog;
