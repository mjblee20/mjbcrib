import React from './node_modules/react';

import './HabitTracker.css';

function ScoreBoard(props) {
  return (
    <div>
      <div className='boardBody'>
        <p>Here is be a tag for each successful day of keeping a habit </p>
        {/* TODO: Create a tag for each successful continuting days of keeping a habit */}
      </div>
    </div>
  );
}

export default ScoreBoard;