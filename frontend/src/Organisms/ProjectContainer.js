import React from 'react';

import './ProjectContainer.css';
import ProjectList from '../Compounds/ProjectList';

const PROJECTS = [
  {
    name: 'grid-mania',
    type: 'Solo Project',
    description: 'A CSS project to practice all things related to CSS styling. Focusing mainly on interest layouts and animation styles. Animations will include the use of npm packages react-spring and framer-motions',
    github: 'https://github.com/mjblee20/grid-mania',
    weblink: '',
  },{
    name: 'allThingsJavascript',
    type: 'Solo Project',
    description: 'A Javascript focused Node.js project where all the algorithm problems will be practiced and solved here. This includes problem, solution, comments, and test cases',
    github: 'https://github.com/mjblee20/js-algorithms-and-data-structures',
    weblink: '',
  },{
    name: 'In-or-Out',
    type: 'Bootcamp Project',
    description: 'A web application developed to assist user-indecisiveness in meal planning',
    github: 'https://github.com/WillCoe/Project1',
    weblink: 'https://willcoe.github.io/Project1/',
  },{
    name: 'Instapotty',
    type: 'Bootcamp Project',
    description: "Instapotty is a place to share pictures of bathrooms made you chuckle, gave you pause, or were so dang classy you want to remember them forever.",
    github: 'https://github.com/ivancho277/fancyBathroom',
    weblink: 'instapotty.herokuapp.com',
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
