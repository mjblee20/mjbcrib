import React from 'react';

import './ProjectContainer.css';
import ProjectList from '../Compounds/ProjectList';

const PROJECTS = [
  {
    name: 'grid-mania',
    description: 'A CSS project to practice CSS styling related code',
    github: 'https://github.com/mjblee20/grid-mania',
  },{
    name: 'grid-mania',
    description: 'A CSS project to practice CSS styling related code',
    github: 'https://github.com/mjblee20/grid-mania',
  },{
    name: 'grid-mania',
    description: 'A CSS project to practice CSS styling related code',
    github: 'https://github.com/mjblee20/grid-mania',
  },{
    name: 'grid-mania',
    description: 'A CSS project to practice CSS styling related code',
    github: 'https://github.com/mjblee20/grid-mania',
  }
]

function ProjectContainer() {
  return (
    <div className='project-content-container'>
      <ProjectList projects={PROJECTS} />
    </div>
  )
}

export default ProjectContainer;
