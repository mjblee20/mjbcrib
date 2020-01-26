import React from 'react';
import { Link } from 'react-router-dom';

import './LiftLinkToButton.css';

const LiftLinkToButton = (props) => {
  return(
    <section className="portfolio-experiment">
      <Link to={props.route} >
        <span 
          className="text" 
          style={{
            color: 'var(--white)'
          }}
        >{props.children}</span>
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </Link>
    </section>
  )
}

export default LiftLinkToButton;
