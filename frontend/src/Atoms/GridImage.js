import React from 'react';

import './GridImage.css';

const GridImage = (props) => {
  return(
    <div className='imgbox'>
      <img src={props.source} alt={props.alt} />
    </div>
  )
}

export default GridImage;
