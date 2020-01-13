import React from 'react';

// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup'

// import Styles from './Portfolio.module.css';
import AppStyles from './../../App.module.css';
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
        {/* TODO: center and add color box with margin underneath the Portfolio title */}
        <Row className={AppStyles.sectionTitleRow}>
          <h2 className={AppStyles.sectionTitle}>Portfolio</h2>
        </Row>

        <h4>Exercise Log</h4>
        <ListGroup horizontal>
          <ListGroup.Item href="/exercises" action variant='info'>Exercise Log</ListGroup.Item>
          <ListGroup.Item href="/users" action variant='info'>User Log</ListGroup.Item>
        </ListGroup>

        <h4>Productivity</h4>
        <ListGroup horizontal>
          <ListGroup.Item href="/todo" action variant='info'>ToDo List</ListGroup.Item>
          <ListGroup.Item href="/calendar" action variant='info'>Calendar</ListGroup.Item>
        </ListGroup>

      {/* get from database and populate the section with up to 3 projects */}

        {/* allow adding to database with new projects */}

        {/* TODO: List of projects in card formats */}
        {/* TODO: Button for every card to github and the page they are located */}
        {/* TODO: Maybe scrap github to grab information for the newest projects etc. */}

        <h4>Projects</h4>
        <Row>
          <Col>
          
          </Col>

          <Col>

          </Col>

          <Col>
          
          </Col>
        </Row>
      </div>
    );
  }
}

export default Portfolio;