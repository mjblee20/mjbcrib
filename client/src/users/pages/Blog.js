import React from 'react';

import Row from 'react-bootstrap/Row';

import BlogList from '../components/Blog/BlogList';


import ProfileImage from './../../shared/images/avatar.png';

import './Blog.css';

const DUMMYBLOGS = [
  {
    image: ProfileImage,
    poster: 'Bill',
    date: Date(),
    content: "Hi, this is the first blog post ever"
  }, {
    image: ProfileImage,
    poster: 'Bill',
    date: Date(),
    content: "Hi, this is the second blog post ever"
  }
]

const Blog = (props) => {
  return (
    <div className='blog-content'>
      <Row id='blog-header'>
          <h1>Blogs of My Work</h1>
      </Row>
      <BlogList items={DUMMYBLOGS} />
    </div>
  );
}

export default Blog;
