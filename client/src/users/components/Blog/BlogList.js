import React from 'react';

import Card from './../../../shared/components/UIElements/Card';
import BlogItem from './BlogItem';
import './BlogList.css';

const BlogList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="blog-list center">
        <Card>
          <h2>No blog posts found.</h2>
        </Card>
      </div>
    );
  }

  return(
    <ul className="blog-list">
      {props.items.map(blog => {
        return(
          <BlogItem 
            key={blog.id}
            image={blog.image}
            poster={blog.poster}
            date={blog.date}
            content={blog.content}
          />
        );
      })}
    </ul>
  );
}

export default BlogList;

