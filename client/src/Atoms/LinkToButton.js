import React from 'react';
import { Link } from 'react-router-dom';


import './LinkToButton.css';

const LinkToButton = (props) => {
  return (
    <div id='transform-container'>
      <Link className="btn-draw" to={props.route}>
        <span>{props.children}</span>
      </Link>
    </div>
  )
}

export default LinkToButton;
