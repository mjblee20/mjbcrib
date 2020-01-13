import React from 'react';

// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

import Styles from './Portfolio.module.css';
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
        <ListGroup>
          <ListGroup.Item href="/exercises" action variant='info'>Exercise Log</ListGroup.Item>
          <ListGroup.Item href="/users" action variant='info'>User Log</ListGroup.Item>
        </ListGroup>

        <br /> 

        <h4>Productivity</h4>
        <ListGroup>
          <ListGroup.Item href="/todo" action variant='info'>ToDo List</ListGroup.Item>
          <ListGroup.Item href="/calendar" action variant='info'>Calendar</ListGroup.Item>
        </ListGroup>

        <br /> 

        <h4>Projects</h4>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>AllThingsJavascript</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Solo Project</Card.Subtitle>
                <Card.Text className={Styles.description}>
                  A Node.js project of my own where I practice the coding challenges and problems. A little bit of Javascript learning will go here as well. 
                </Card.Text>
                <Card.Link href="https://github.com/mjblee20/js-algorithms-and-data-structures">GitHub Link</Card.Link>
                <Card.Link href="#" disabled>Web Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>In or Out</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Bootcamp Project</Card.Subtitle>
                <Card.Text className={Styles.description}>
                  A web application designed to help decide whether to eat in or dine out. Once the choice is selected, three choices will randomly be selected and displayed.
                </Card.Text>
                <Card.Link href="https://github.com/mjblee20/js-algorithms-and-data-structures">GitHub Link</Card.Link>
                <Card.Link href="https://willcoe.github.io/Project1/">Web Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Instapotty</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Bootcamp Project</Card.Subtitle>
                <Card.Text className={Styles.description}>
                  A web application similar in function as Instagram, but with a TWIST! Here only memorable/breathtaking/mind-blowing bathroom photos will be posted.
                </Card.Text>
                <Card.Link href="https://github.com/ivancho277/fancyBathroom">GitHub Link</Card.Link>
                <Card.Link href="instapotty.herokuapp.com">Web Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <br /> 
      </div>
    );
  }
}

export default Portfolio;