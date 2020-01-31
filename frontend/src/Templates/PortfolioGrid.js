// Import Dependencies
import React from 'react';

// Import Stylings
import './PortfolioGrid.css';
import PageHeader from '../Organisms/PageHeader';
import PageFooter from '../Organisms/PageFooter';
import ProjectContainer from '../Organisms/ProjectContainer';

// Import Components



const PortfolioGrid = (props) => {
  return(
    <div className='portfolio-grid-container'>

      <PageHeader title='Portfolio' color='var(--skin)'/>
      
      {/* TODO: Eventually it's own js file */}
      <div className='portfolio-body'>
        <ProjectContainer />
      </div>
      

      <PageFooter title='Footer' />
    </div>
  );
}

export default PortfolioGrid;