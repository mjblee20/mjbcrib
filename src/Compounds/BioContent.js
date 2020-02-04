import React from 'react';

import './BioContent.css';

const BioContent = (props) => {
  return(
    <div className='bio-content'>
      <div className='bio-content-header'>
        <h2>A Little Spiel...</h2>
      </div>
      
      <div className='bio-content-body'>
        <p id='bio'>
          Hi there! I'm Ming Jung Lee, you can call me Bill. I'm a passionate full stack web developer with a background in Biophysics looking to create intuitive, efficient, and user-friendly interfaces. I have recently completed a full-stack development bootcamp course and currently is looking for a position in which I can quickly absorb new information and learn new skills and apply the knowledge in real world web applications.
        </p>
      </div>
    </div>
  );
}

export default BioContent;