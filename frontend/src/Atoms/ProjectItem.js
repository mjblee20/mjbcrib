import React from 'react';
import './ProjectItem.css';

/**
 * 
 * @param {Object} props [name] [description] [github] [image]
 */
function ProjectItem(props) {
  return (
    <div>
      {/* <div className="project-image">
        <img src={props.image} alt='project image' />
      </div> */}
      <div className="project-title">
        <h3>{props.name}</h3>
      </div>
      <div className="project-description">
        <p>{props.description}</p>
      </div>
      <div className='project-github'>
        <div>{props.github}</div>
      </div>
    </div>
  )
}

export default ProjectItem
