import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

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
          
          <div className='projectCardSpace'>
            <Card className='projectCard card-custom' style={{ width: '18.5rem', margin:'2rem' }}>
              <Card.Body>
                <Card.Title>AllThingsJavascript <Badge variant="secondary">New</Badge></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Solo Project</Card.Subtitle>
                <Card.Text className='description'>
                  A Node.js project of my own where I practice the coding challenges and problems. A little bit of Javascript learning will go here as well. 
                </Card.Text>
                <div className = 'buttonGroup'>
                  <Button variant='dark' href="https://github.com/mjblee20/js-algorithms-and-data-structures">GitHub Link</Button>
                  <Button variant='dark' href="#" disabled>Web Link</Button>
                </div>
              </Card.Body>
            </Card>

            <Card className='projectCard card-custom' style={{ width: '18.5rem', margin:'2rem'}}>
              <Card.Body>
                <Card.Title>In or Out</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Bootcamp Project</Card.Subtitle>
                <Card.Text className='description'>
                  A web application designed to help decide whether to eat in or dine out. Once the choice is selected, three choices will randomly be selected and displayed.
                </Card.Text>
                <div className = 'buttonGroup'>
                  <Button variant='dark' href="https://github.com/mjblee20/js-algorithms-and-data-structures">GitHub Link</Button>
                  <Button variant='dark' href="https://willcoe.github.io/Project1/">Web Link</Button>
                </div>
              </Card.Body>
            </Card>
            
            <Card className='projectCard card-custom' style={{ width: '18.5rem', margin:'2rem' }}>
              <Card.Body>
                <Card.Title>Instapotty</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Bootcamp Project</Card.Subtitle>
                <Card.Text className='description'>
                  A web application similar in function as Instagram, but with a TWIST! Here only memorable/breathtaking/mind-blowing bathroom photos will be posted.
                </Card.Text>
                <div className = 'buttonGroup'>
                  <Button variant='dark' href="https://github.com/ivancho277/fancyBathroom">GitHub Link</Button>
                  <Button variant='dark' href="instapotty.herokuapp.com">Web Link</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <br /> 
          <div>
            <Row>
              <Col>
                <h3 className='customFont1'>Exercise Log</h3>
                <ListGroup>
                  <ListGroup.Item href="/exercises" action variant='info'>Exercise Log</ListGroup.Item>
                  <ListGroup.Item href="/users" action variant='info'>User Log</ListGroup.Item>
                </ListGroup>

                <br /> 
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className='customFont1'>Productivity</h3>
                <ListGroup>
                  <ListGroup.Item href="/todo" action variant='info'>ToDo List</ListGroup.Item>
                  <ListGroup.Item href="/calendar" action variant='info'>Calendar</ListGroup.Item>
                </ListGroup>

                <br /> 
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className='customFont1'>TicTacToe</h3>
                <ListGroup>
                  <ListGroup.Item href="/tictactoe" action variant='info'>Game</ListGroup.Item>
                </ListGroup>

                <br /> 
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className='customFont1'>Habits</h3>
                <ListGroup>
                  <ListGroup.Item href="/habits" action variant='info'>View Habits</ListGroup.Item>
                  <ListGroup.Item href="/habits/createstack" action variant='info'>Create Habit Stack</ListGroup.Item>
                </ListGroup>

                <br /> 
              </Col>
            </Row>
          </div>
        </div>

      </div>
    );
  }
}

export default Portfolio;