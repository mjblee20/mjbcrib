import React from 'react';
import './Modal.css';
import '../Atoms/Backdrop';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';


function ModalOverlay(props) {
  const content = (
    <div className={`modal ${props.className}`} style={ props.style }>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>
          {props.header}
        </h2>
      </header>
      <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault() }>
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`mode__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  )
  return (
    ReactDOM.createPortal(content, document.getElementById('modal-hook'))
  )
}


function Modal(props) {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200}
      >
      
      </CSSTransition>
    </>
  )
}

export default Modal;
