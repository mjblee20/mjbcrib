// Import Dependencies
import React from 'react';

// Import Stylings
import './WelcomeGrid.css';

// Import Components
import LinkToButton from '../Atoms/LinkToButton';

/* Welcome Page! With Animations!*/
const WelcomeGrid = (props) => {

 
  const createPetals = () => {
    let petals = [];
    for (var i = 0; i < 60; i++) {
        // note: we add a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        petals.push(<div className='petal-dots' key={i}></div>);
    }
    return (
      <div className='flower-center'>
        {petals}
      </div>
    );
  }

  return(
      <React.Fragment>
      <div className='welcome-grid'>

        <div className='welcome-container'>
          <LinkToButton route='/home'>Welcome!</LinkToButton>
        </div>

      </div>

      <div className='flower-container'>
        <div className="flower_box">
          <div className="flower">
            <div className="petals"></div>
            <div className="petals"></div>
            <div className="petals"></div>
            <div className="petals"></div>
            <div className="petals"></div>
          </div>
          <div id="pistil"></div>
        </div>
      </div>

      </React.Fragment>
      
  )
}

export default WelcomeGrid;