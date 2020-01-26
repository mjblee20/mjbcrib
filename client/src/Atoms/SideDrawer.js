import React from 'react';
import ReactDOM from 'react-dom';

import './SideDrawer.css';

const SideDrawer = props => {
  const content = (
    <div className='nav-sidebar'>
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside> 
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
