// Import Dependencies
import React from 'react';

// Import Stylings
import './HomeGrid.css';
import HomeSections from '../Organisms/HomeSections';

// Import Components



const HomeGrid = (props) => {
  return(
    <div className='home-grid-container'>

      {/* <PageHeader title='Home' /> */}
      
      <HomeSections />
      
      {/* TODO: Eventually it's own js file */}

      {/* <PageFooter title='' /> */}
    </div>
  );
}

export default HomeGrid;
