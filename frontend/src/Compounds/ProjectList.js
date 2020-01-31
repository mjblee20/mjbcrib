import React from 'react';
import ProjectItem from '../Atoms/ProjectItem';

/**
 * 
 * @param {Array} props [projects]
 */
function ProjectList(props) {
  return (
    <div className='project-list'>
      {props.projects.map(project => (
        <ProjectItem name={project.name} description={project.description} github={project.github} />
      ))}
    </div>
  )
}

export default ProjectList;
