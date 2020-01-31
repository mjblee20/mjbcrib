import React from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';


function ModalOverlay(props) {
  const content = (
    <div className={`modal ${props.className}`} style={ props.style }>
      {props.children}
    </div>
  )
  return (
    ReactDOM.createPortal(content, document.getElementById('modal-hook'))
  )
}


function Modal(props) {
  return (
    <div>
      
    </div>
  )
}

export default Modal
