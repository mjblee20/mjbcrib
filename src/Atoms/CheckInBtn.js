import React from 'react';
import './CheckInBtn.css';

function CheckInBtn(props) {
  return (
    <div className='check-in-btn'>
      <button type='button' onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  )
}

export default CheckInBtn
