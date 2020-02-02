import React, { useState } from 'react';
import './ProjectItem.css';
import Card from '../UI/Card';
import { Link } from 'react-router-dom';

/**
 * 
 * @param {Object} props [name] [description] [github] [image]
 */
function ProjectItem(props) {
  // Should be set to false because text shouldn't show when page loads
  const [showText, toggleText] = useState(false);

  const showTextHandler = (e) => {
    e.preventDefault();
    // If showText is true, show more description
    if (showText) {
      // TODO: Expand the description area to show full text
      toggleText(!showText);
    } else {
      // TODO: Shrink description area to 
      toggleText(!showText);
    }
  }

  // depending on
  let btn='';
  if(showText) {
    btn='Read Less...';
  } else {
    btn='Read More...'
  }
  

  return (
    <Card className='project-card'>
      <div className='project-item-container'>
        <div className="project-image">
          
        </div>
        <div className='project-content'>
          <div className="project-title">
            <h3>{props.name}</h3>
          </div>
          <div className="project-description">
            {/* TODO: If description is too long show read more button */}
            
            <p>{props.description}</p>
            {/* TODO: Show read less button */}
            {/* TODO: Only show read more if description is more than the space can hold*/}
            <button type='button' onClick={showTextHandler}>
              {btn}
            </button>
          </div>
          <div className='project-github'>
            <button className='github-button'> 
              <a href={props.github}>Github</a>
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProjectItem
