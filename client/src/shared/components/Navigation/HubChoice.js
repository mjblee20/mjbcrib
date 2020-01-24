import React, { useState }from 'react';
import { Link }  from 'react-router-dom';

import './HubChoice.css';
import LinkToButton from '../UIElements/LinkToButton';

const HubChoice = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const readMoreHandler = (e) => {
    e.preventDefault();
    setIsOpen(true);
  }

  const readLessHandler = (e) => {
    e.preventDefault();
    setIsOpen(false);
  }

  return (
    <div className='container'>
      <LinkToButton className='section-title' route={props.route}>
        {props.title}
      </LinkToButton>

    </div>
  )
}

export default HubChoice;