import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

// This backdrop function can be used to close modals or pop ups by clicking on the darkened area
const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
