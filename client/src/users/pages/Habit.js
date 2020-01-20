import React from 'react';

import HabitStacker from '../components/Habits/HabitStacker';
import HabitTracker from '../components/Habits/HabitTracker';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Habit() {
  var DUMMYHABITSTACKS = [{
    id: 1,
    habit: 'Study',
    desire: 'study for an hour',
    wanted: 'play one game of league of legends',
    streak: 30
  }, {
    id: 2,
    habit: 'Exercise',
    desire: 'exercise for an hour',
    wanted: 'play one game of league of legends',
    streak: 10
  }, {
    id: 3,
    habit: 'Meditate',
    desire: 'meditate for 10 minutes',
    wanted: 'drink a cup of coffee',
    streak: 14
  }]

  return (
    <div>
      <Row>
        <Col>
          {/* 
          HabitTracker keeps track of the streak you have going on
          @ Streak Number
          
          */}
          <HabitTracker habits={DUMMYHABITSTACKS}/>
        </Col>

        <Col>
          {/*
            HabitStacker should recieve an array of objects that consists of:
            @ Stack Number: id
            @ Desired Habit
            @ Wanted Habit
            */}
          <HabitStacker habits={DUMMYHABITSTACKS}/>
        </Col>
      </Row>
    </div>
  )
}

export default Habit;
