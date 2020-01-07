import React from 'react';

// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup'

// import Styles from './Portfolio.module.css';
import AppStyles from './../../App.module.css';
import from './../../components/Exercise/'

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

        {/* get from database and populate the section with up to 3 projects */}

        {/* allow adding to database with new projects */}

        {/* TODO: List of projects in card formats */}
        {/* TODO: Button for every card to github and the page they are located */}
        {/* TODO: Maybe scrap github to grab information for the newest projects etc. */}
        <ListGroup horizontal>
          <h4>Exercise Log App</h4>
          <ListGroup.Item>Exercise Log</ListGroup.Item>
          <ListGroup.Item>User Log</ListGroup.Item>
        </ListGroup>

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