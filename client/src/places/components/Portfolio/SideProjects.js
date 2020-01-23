import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './SideProjects.css';

const SideProjects = (props) => {
  return (
    <div className='side-projects'>
    
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
  )
}

export default SideProjects;