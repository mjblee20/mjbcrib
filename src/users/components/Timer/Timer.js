import React from 'react';
import Styles from './Timer.module.css';

import 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// TODO: every 4th break while working on the same task will be a long break
// TODO: after start every time set time is up prompt user to take a short break and start break timer
// TODO: ability to set focus time and rest time for full flexibility
// 
class SessionTimer extends React.Component {
  
  constructor(props) {
    super(props);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
    // {/* Setting the "state" of the Component */}
    // {/* (DEFINITION) state == the memory of information currently rendered on screen */}
    this.state = {
      seconds: '00',
      minutes: '00',
    };
  }

  
  // Displays the timer information on the screen
  displayTime() {
    return (
      <div>
        <h1 style={{ fontSize: 100 }}>{this.state.minutes}:{this.state.seconds}</h1>
      </div>
    );
  }
  
  // Allows user to input the amount of time they wish to spend on a certain task
  sessionTimer() {
    return(
      <div>
        <Row> 
          <Col>
            <Button> - </Button>
          </Col>
          <Col>
            <div>
              <p className='counter'>00</p>
            </div>
          </Col>
          <Col>
            <Button> + </Button>
          </Col>
        </Row>
      </div>
    );
  }

  shortBreak() {
    return(
      <div>
        <Row> 
          <Col>
            <Button> - </Button>
          </Col>
          <Col>
            <div>
              <p className='counter'>00</p>
            </div>  
          </Col>
          <Col>
            <Button> + </Button>
          </Col>
        </Row>
      </div>
    );
  }

  longBreak() {
    return(
      <div>
        <Row> 
          <Col>
            <Button> - </Button>
          </Col>
          <Col>
          <div>
            <p className='counter'>00</p>
          </div>
          </Col>
          <Col>
            <Button>  + </Button>
          </Col>
        </Row>
      </div>
    );
  }

  // Begins countdown
  startTimer() {
    return(
      <div>
        <Button>Start</Button>
      </div>
    );
  }

  stopTimer() {
    return(
      <div>
        <Button>Stop</Button>
      </div>
    );
  }

  resetTimer() {
    return(
      <div>
        <Button>Reset</Button>
      </div>
    );
  }

  
  handleChange(event) {
    this.setState({
      minutes: event.target.value
    })
  }

  render(){
    return(
      <div id='timer'>
        {this.displayTime()}
        <Container>
          <Row>
            <Col>
              {this.sessionTimer()}
            </Col>
            <Col>
              {this.longBreak()}
            </Col>
            <Col>
              {this.shortBreak()}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SessionTimer;
