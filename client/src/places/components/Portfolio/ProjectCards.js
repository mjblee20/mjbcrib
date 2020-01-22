import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import './ProjectCards.css'

const ProjectCards = (props) => {
  return(
      <div className='project-card-space'>
        <Card className='project-card card-custom' style={{ width: '18rem', margin:'2rem' }}>
          <Card.Body>
            <Card.Title>AllThingsJavascript</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Solo Project <Badge variant='secondary'>New</Badge></Card.Subtitle>
            <Card.Text className='description'>
              A Node.js project of my own where I practice the coding challenges and problems. A little bit of Javascript learning will go here as well. 
            </Card.Text>
            <div className = 'button-group'>
              <Button variant='dark' href="https://github.com/mjblee20/js-algorithms-and-data-structures">GitHub Link</Button>
              <Button variant='dark' href="#" disabled>Web Link</Button>
            </div>
          </Card.Body>
        </Card>

        <Card className='project-card card-custom' style={{ width: '18rem', margin:'2rem'}}>
          <Card.Body>
            <Card.Title>In or Out</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Bootcamp Project</Card.Subtitle>
            <Card.Text className='description'>
              A web application designed to help decide whether to eat in or dine out. Once the choice is selected, three choices will randomly be selected and displayed.
            </Card.Text>
            <div className = 'button-group'>
              <Button variant='dark' href="https://github.com/mjblee20/js-algorithms-and-data-structures">GitHub Link</Button>
              <Button variant='dark' href="https://willcoe.github.io/Project1/">Web Link</Button>
            </div>
          </Card.Body>
        </Card>
        
        <Card className='project-card card-custom' style={{ width: '18rem', margin:'2rem' }}>
          <Card.Body>
            <Card.Title>Instapotty</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Bootcamp Project</Card.Subtitle>
            <Card.Text className='description'>
              A web application similar in function as Instagram, but with a TWIST! Here only memorable/breathtaking/mind-blowing bathroom photos will be posted.
            </Card.Text>
            <div className = 'button-group'>
              <Button variant='dark' href="https://github.com/ivancho277/fancyBathroom">GitHub Link</Button>
              <Button variant='dark' href="instapotty.herokuapp.com">Web Link</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
  )
}

export default ProjectCards;

