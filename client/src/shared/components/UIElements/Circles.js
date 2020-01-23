import React from 'react';

import './Circles.css';

const Circles = (props) => {
  return(
    <div className='circles' 
    style={{ 
      height: props.length, 
      width: props.length, 
      borderRadius: props.length,
      background: props.color, 
      marginLeft: props.positionX
    }}>
      {props.children}
    </div>
  );
}

export default Circles;