import React from 'react';
import { Link } from 'react-router-dom';

import './LinkToButton1.css';

const LinkToButton1 = (props) => {
  return(
    <section className="portfolio-experiment">
      <Link to='/habits'>
        <span className="text">{props.children}</span>
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </Link>
    </section>
  )
}

export default LinkToButton1;
