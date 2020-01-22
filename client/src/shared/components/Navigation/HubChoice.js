import React, { useState }from 'react';
import { Link }  from 'react-router-dom';

import './HubChoice.css';

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
        <Link className='section-title' to={props.route}>{props.title}</Link>
        
        {/* OnHover little read more tab. Onclick read More overlay pops over */}
        <div className='read-more-overlay'>
          {/* <div>
            <button className='read-more-btn' onClick={readMoreHandler}>Read More...</button>
          </div> */}
          <div className='more-info-overlay'>
            {/* an exit button with X circle */}
            <p>
              {props.content}
              {/* <div>
                <button className='read-less-btn' onClick={readLessHandler}>Read Less...</button>
              </div> */}
            </p>

          </div>
        </div>
      </div>
  )
}

export default HubChoice;