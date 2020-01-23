import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import './ProjectItem.css';

const ProjectItem = (props) => {
  return (
    <Card className='project-card card-custom' style={{ width: '18rem', margin:'1rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
        <Card.Text className='description'>
          {props.description}
        </Card.Text>
      </Card.Body>
      <div className = 'button-group'>
        <Button variant='dark' href={props.github}>GitHub Link</Button>
        <Button variant='dark' href={props.web}>Web Link</Button>
      </div> 
    </Card>
  );
}

export default ProjectItem;