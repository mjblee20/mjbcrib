import React from 'react';

import SideProjects from './SideProjects';
import ProjectCards from './ProjectCards';
import LinkToButton1 from './../../../shared/components/UIElements/LinkToButton1';

import './GridContainer.css';

const GridContainer = (props) => {
  return (
    <div className='grid-container'>
      <div className='habit'>
        <p id='habits-description'>Habits are important believe it or not. Good habits will launch you like a rocket while bad habits will drag your life down like tying a rock on your feet in water</p>
        <div>
          <LinkToButton1>Get Started</LinkToButton1>
        </div>
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
