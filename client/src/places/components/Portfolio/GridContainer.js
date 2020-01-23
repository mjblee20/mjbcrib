import React from 'react';

import PlayGround from './PlayGround';
import SideProjects from './SideProjects';
import ProjectCards from './ProjectCards';
import './GridContainer.css';

const GridContainer = (props) => {
  return (
    <div className='grid-container'>
      <div className='habit'>
        <h1>Habit stuff will go here</h1>
      </div>

      <div className='project-cards'>
        <ProjectCards />
      </div>

      <div className='side-projects'>
        <SideProjects />
      </div>

      <div className='playground'>
        <h1>Playground</h1>
      </div>

      <div className='HTML'>
        <h1>HTML</h1>
      </div>

      <div className='CSS'>
        <h1>CSS</h1>
      </div>

      <div className='Javascript'>
        <h1>Javascript</h1>
      </div>

    </div>
  )
}

export default GridContainer;
