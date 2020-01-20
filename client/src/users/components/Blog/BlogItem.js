import React from 'react';

import Avatar from './../../../shared/components/UIElements/Avatar';
import './BlogItem.css';

const BlogItem = (props) => {
  return (
    <li className='blog-post'>
      <div className='poster-info'>
        <div className='poster-info__image'>
          <Avatar image={props.image} alt={props.poster} />
        </div>
        <h2>{props.poster}</h2>
      </div>
      <hr />
      <div className='post-content'>
        <p>{props.content}</p>
      </div>
      <div className='post-footer'>
        <span className='post-date'>{props.date}</span>
      </div>
    </li>
  )
}

export default BlogItem;