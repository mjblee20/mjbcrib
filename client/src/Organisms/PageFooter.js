import React from 'react';

import './PageFooter.css';

const PageFooter = (props) => {
  return(
    <div className='footer-container'>
      <h1>{props.title}</h1>
    </div>
  )
}

export default PageFooter;