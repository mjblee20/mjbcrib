import React from 'react';

import './HomeSectionBtn.css';
import LiftLinkToButton from './LiftLinkToButton';

const HomeSectionBtn = (props) => {
  return(
    <LiftLinkToButton 
      className='home-section-btn' 
      route={props.route}
      style={{
        color: 'var(--black)',
        textShadow: '2px 2px var(--white)'
      }}
    >
      {props.title}
    </LiftLinkToButton>
  );
}

export default HomeSectionBtn;
