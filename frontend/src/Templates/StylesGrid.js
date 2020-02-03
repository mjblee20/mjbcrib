// Import Dependencies
import React from 'react';

// Import Stylings
import './StylesGrid.css';
import PageHeader from '../Organisms/PageHeader';
import PageFooter from '../Organisms/PageFooter';
import SchemeContainer from '../Organisms/SchemeContainer';


const StylesGrid = () => {
  return(
    <div className='styles-grid-container'>

      <PageHeader title='Styles' color='var(--lightergray)'/>
      
      {/* TODO: Eventually it's own js file */}
      <div className='styles-body'>
        <SchemeContainer />
      </div>
      

      <PageFooter title='Footer' />
    </div>
  );
}

export default StylesGrid;