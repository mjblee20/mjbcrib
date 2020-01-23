import React from 'react';

import './Squares.css'

const Squares = (props) => {
  return(
    <div className='squares' style={{ height: props.length, width: props.length, background: props.color, marginLeft: props.positionX}}>
      {props.children}
    </div>
  );
}

export default Squares
