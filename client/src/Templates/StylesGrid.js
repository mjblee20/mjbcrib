// Import Dependencies
import React from 'react';

// Import Stylings
import './StylesGrid.css';
import PageHeader from '../Organisms/PageHeader';
import HomeSections from '../Organisms/HomeSections';
import PageFooter from '../Organisms/PageFooter';

// Import Components



const StylesGrid = (props) => {
  return(
    <div className='styles-grid-container'>

      <PageHeader title='Styles'  color='var(--lightergray)'/>
      
      {/* TODO: Eventually it's own js file */}
      <div className='styles-body'></div>
      

      <PageFooter title='Footer' />
    </div>
  );
}

export default StylesGrid;