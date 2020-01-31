import React from 'react';
import './ProjectItem.css';
import Card from '../UI/Card';

/**
 * 
 * @param {Object} props [name] [description] [github] [image]
 */
function ProjectItem(props) {
  return (
    <Card className='project-card'>
      <div className='project-item-container'>
        <div className="project-image">
          
        </div>
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
    </Card>
  )
}

export default ProjectItem
