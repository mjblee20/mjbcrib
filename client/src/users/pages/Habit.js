import React from 'react';

import HabitStacker from './../components/Habits/HabitStacker';
import HabitTracker from './../components/Habits/HabitTracker';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Habit() {
  var HABITS = [{
    id: 1,
    name: 'Study',
    desire: 'study for an hour',
    wanted: 'play one game of league of legends',
    streak: 30
  }, {
    id: 2,
    name: 'Exercise',
    desire: 'exercise for an hour',
    wanted: 'play one game of league of legends',
    streak: 10
  }]

  return (
    <div>
      <Row>
        <Col>
          {/* 
          HabitTracker keeps track of the streak you have going on
          @ Streak Number
          
          */}
          <HabitTracker habits={HABITS}/>
        </Col>

        <Col>
          {/*
            HabitStacker should recieve an array of objects that consists of:
            @ Stack Number: id
            @ Desired Habit
            @ Wanted Habit
            */}
          <HabitStacker habitstack={HABITS}/>
        </Col>
      </Row>
    </div>
  )
}

export default Habit;
