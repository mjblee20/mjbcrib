import React, { useState }from 'react';

import ProjectItem from './ProjectItem';
import Carousel from 'react-bootstrap/Carousel';
import './ProjectCards.css'

const Projects = [
  {
    id: 1,
    title: 'AllThingsJavascript',
    subtitle: 'Solo Project',
    description: 'A Node.js project of my own where I practice the coding challenges and problems. A little bit of Javascript learning will go here as well.',
    githubLink: 'https://github.com/mjblee20/js-algorithms-and-data-structures',
    webLink: '#'
  }, {
    id: 2,
    title: 'In or Out',
    subtitle: 'Bootcamp Project',
    description: 'A web application designed to help decide whether to eat in or dine out. Once the choice is selected, three choices will randomly be selected and displayed.',
    githubLink: 'https://github.com/mjblee20/js-algorithms-and-data-structures',
    webLink: 'https://willcoe.github.io/Project1/'
  }, {
    id: 3,
    title: 'Instapotty',
    subtitle: 'Bootcamp Project',
    description: 'A web application similar in function as Instagram, but with a TWIST! Here only memorable/breathtaking/mind-blowing bathroom photos will be posted.',
    githubLink: 'https://github.com/ivancho277/fancyBathroom',
    webLink: 'instapotty.herokuapp.com'
  }
]

const ProjectCards = (props) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  return(
    <Carousel className='carousel-container' activeIndex={index} direction={direction} onSelect={handleSelect}>
      {Projects.map((project) => (
        <Carousel.Item className='carousel-item' key={project.id}>
          <div className='project-card-container'>
            <ProjectItem 
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              github={project.githubLink}
              web={project.webLink}
            />
          </div>
          <div className='project-card-caption'>
            {/* <Carousel.Caption>
              <p>Caption can go here</p>
            </Carousel.Caption> */}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProjectCards;

