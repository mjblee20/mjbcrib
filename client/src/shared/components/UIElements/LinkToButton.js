import React from 'react';
import { Link } from 'react-router-dom';


import './LinkToButton.css';

const LinkToButton = (props) => {
  if (props.route) {
    return(
      <div id='transform-container'>
        <Link className="btn-draw" to='#'>
          <span>{props.children}</span>
        </Link>
      </div>
    )
  }
  return (
    <div id='transform-container'>
      <Link className="btn-draw" to={props.route}>
        <span>{props.children}</span>
      </Link>
    </div>
  )
}

export default LinkToButton;
