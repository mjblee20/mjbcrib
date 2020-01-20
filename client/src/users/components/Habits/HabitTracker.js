import React from 'react'

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import ScoreBoard from './ScoreBoard';

function HabitTracker(props) {
    // TODO: Allowing inputing and removing items into thte list
    // TODO: AlLowing rating the items to be beneficial/neutral/bad to becoming the identity for yourself 

  return (
    
    <div>
      {/* TODO: Habit Score Board */}
      {/* TODO: Habit Stacking Diagram */}
      {/* TODO: Allow adding to the Habit stacking */}
      <h2>Habit Streak</h2>
      <Tabs defaultActiveKey="" id="uncontrolled-tab-example">
        {props.habits.map(habit => (
          <Tab eventKey={habit.name} title={habit.name}>
            <ScoreBoard streak={habit.streak}/>
          </Tab>
        ))}
      </Tabs>
    </div>
  )
}

export default HabitTracker;
