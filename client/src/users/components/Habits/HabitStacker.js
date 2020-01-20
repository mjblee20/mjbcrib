import React from 'react';

import StackItem from './StackItem';

import './HabitStacker.css';

function HabitStacker(props) {

  if (props.habitstack.length === 0) {
    return (
      <div>
        <h2>Currently You Have Zero Habit Stacks</h2>
      </div>
    )
  }

  return (
    <div className='stackList'>
      {props.habitstack.map(stack => (
        <StackItem 
          key={stack.id} 
          id= {stack.id} 
          desire={stack.desire} 
          wanted={stack.wanted} 
          />
      ))}
    </div>
  )
}

export default HabitStacker;
