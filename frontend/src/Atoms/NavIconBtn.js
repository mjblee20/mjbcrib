import React from 'react';

import './NavIconBtn.css';

const NavIconBtn = (props) => {
  return(
    <div className='nav-icon-btn'>
      {props.children}
    </div>
  )
}

export default NavIconBtn;