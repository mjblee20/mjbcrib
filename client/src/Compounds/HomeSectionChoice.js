// Import Dependencies
import React from 'react';

// Import Stylings
import './HomeSectionChoice.css';

// Import Components
import HomeSectionBtn from '../Atoms/HomeSectionBtn';

const HomeSectionChoice = (props) => {
  return(
    <div className='section-choice-container' style={{ background: props.color }}>
      <HomeSectionBtn title={props.title} route={props.route} />
      {/* TODO: When button hovers on top of button show a little bit of text */}
      {/* TODO: Animate Logic for transition */}
      {/* TODO: When mouse leaves the section-choice-container little text disappears*/}
    </div>
  )
}

export default HomeSectionChoice;
