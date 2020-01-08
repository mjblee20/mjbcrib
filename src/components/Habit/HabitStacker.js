import React, { Component } from 'react';

class HabitStacker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wantedHabit: '',
      desiredHabit: '',
    }
  }
  render() {
    return (
      <div>
        <h1>HabitStacker</h1>
        <p>After "Performing Wanted Habit", I will "Perform Desired Habit"</p>
        <renderStacks/>
      </div>
    )
  }
}

export default HabitStacker;
