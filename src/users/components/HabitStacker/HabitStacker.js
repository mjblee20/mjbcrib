import React from 'react';

import StackItem from './StackItem';

import Styles from './HabitStacker.module.css';

function HabitStacker(props) {

  if (props.habitstack.length === 0) {
    return (
      <div>
        <h2>Currently You Have Zero Habit Stacks</h2>
      </div>
    )
  }

  return (
    <div className={Styles.stackList}>
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
