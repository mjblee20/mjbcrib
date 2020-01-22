import React from 'react';

import PlayGround from './../components/Portfolio/PlayGround';
import SideProjects from './../components/Portfolio/SideProjects';
import ProjectCards from './../components/Portfolio/ProjectCards';
import Row from 'react-bootstrap/Row';

import './Portfolio.css';
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    // {/* Setting the 'state' of the Component */}
    // {/* (DEFINITION) state == the memory of information currently rendered on screen */}
    this.state = {
      duration:'',
    };
  }

  // Pings API for project information

  render() {
    return (
      <div>
        <Row id='header'>
            <h1>Projects</h1>
        </Row>
      
        <div className='container'>
          <ProjectCards />
          <br /> 
          <SideProjects />
          <br />
          <PlayGround />
        </div>

      </div>
    );
  }
}

export default Portfolio;