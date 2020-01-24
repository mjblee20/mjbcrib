import React from 'react';

import GridContainer from '../components/Portfolio/GridContainer';
import Row from 'react-bootstrap/Row';

import './Portfolio.css';
const Portfolio = (props) => {
  return (
    <div>
      <Row id='header'>
          <h1>Projects</h1>
      </Row>
    
      {/* Maybe make the grid more reusable by creating a container only */}
      <GridContainer>

      </GridContainer>

    </div>
  );
}

export default Portfolio;