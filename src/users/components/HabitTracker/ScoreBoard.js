import React from 'react';

import Styles from './HabitTracker.module.css';

function ScoreBoard(props) {
  return (
    <div>
      <div className={Styles.boardBody}>
        <p>Here is be a tag for each successful day of keeping a habit </p>
        {/* TODO: Create a tag for each successful continuting days of keeping a habit */}
      </div>
    </div>
  );
}

export default ScoreBoard;