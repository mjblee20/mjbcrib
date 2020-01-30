// Import Dependencies
import React from 'react';

// Import Stylings
import './StylesGrid.css';
import PageHeader from '../Organisms/PageHeader';
import PageFooter from '../Organisms/PageFooter';
import SchemeList from '../Compounds/SchemeList';

// Import Components

const SCHEMES = [
  {
    name: 'warm',
    colors: ['#3C1518', '#92140C', '#FF7700', '#EFD28D', '#D58936']
  },
  {
    name: 'cold',
    colors: ['#71F79F', '#3DD6D0', '#513C2C', '#28190E', '#0081AF']
  },
  {
    name: 'funky',
    colors: ['#220C10', '#ECE2D0', '#7FD1B9', '#FF8A5B', '#F46197']
  },
]

const StylesGrid = () => {
  return(
    <div className='styles-grid-container'>

      <PageHeader title='Styles' color='var(--lightergray)'/>
      
      {/* TODO: Eventually it's own js file */}
      <div className='styles-body'>
        <SchemeList schemes={SCHEMES} />
      </div>
      

      <PageFooter title='Footer' />
    </div>
  );
}

export default StylesGrid;