import React from 'react';

import './PageHeader.css';

const PageHeader = (props) => {
  return(
    <div className='header-container'>
      {
        (props.color) ? (
          <h1 style={{color: props.color}}>{props.title}</h1>
        ): (
          <h1>{props.title}</h1>
        )
      }
      
      {/* TODO: page position progress bar */}
      <div className='position-progress-bar'>
        
      </div>
    </div>
  )
}

export default PageHeader;