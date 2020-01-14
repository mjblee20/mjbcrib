import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './TicTacToe.module.css';

import Button from 'react-bootstrap/Button';

// {/* A JSX comment looks like this */}

// Creating a React Function Component named "Square"
export function Square(props) {
  // {/* Creating an onClick event when user clicks on the square and when they do an "X" will be displayed in the middle of the clicked square */}
  return (
    // {/* When this.setState is called in a component, React auto-updates the child components inside of it as well. */}

    <Button 
      key = {props.value}
      className={Styles.square}
      onClick={props.onClick}
    >
      {/* Retrieving the data from variable value in the props of the React Component */}
      {props.value}
    </Button>
  );
}

// Creating a React Component named "Board"
export class Board extends React.Component {
  /* 
  *** IMMUTABILITY: 
   Generally two approaches to change data: [change data directly (mutate), replace with new copy containing desired changes]
  
   W/ Mutation:
   var player = {score: 1, name: 'Jeff'};
   player.score = 2;
    Now player is {score: 2, name: 'Jeff'}
   
   W/out Mutation:
   var player = {score: 1, name: 'Jeff'};

   var newPlayer = Object.assign({}, player, {score: 2});
   // Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}

   // Or if you are using object spread syntax proposal, you can write:
   var newPlayer = {...player, score: 2};

   Benefits of not mutating:
   1. Complex features become simple - keeps previous data intact to make accessing them a lot easier
   2. Detecting changes - Allows for quick reference to compare if changes where made
   3. Pure Components - detecting change signals for a re-rendering of the detected component
   */

  // {/* Creating a method that will create a Square component every time the method is called */}
  renderSquare(i) {
    return (
      // CONVENTION: 
      //  on[Event] = NAMES for props which represent the [Event]
      //  handle[Event] = METHODS which handle the [Event]
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  
  // {/* Render the game board */}
  render() {
    const board = {
      col: [0,1,2],
      row: [0,1,2],
    }
    let count = 0;

    return (
      <div>
        {
          board.row.map((value, index) => {
            return (
              <div className={Styles.boardRow}>
                {board.col.map((value, index) => {
                  return (
                    this.renderSquare(count++)
                  );
                })}
              </div>
            );
          })
        }
      </div>
    );
  }
}


class Game extends React.Component {
  // placed here to "Lifting the State Up" from a children component
  // {/* Creating a constructor with variables props as data is passed into this React Component */}
  constructor(props) {
    super(props);
    // {/* Setting the "state" of the Component */}
    // {/* (DEFINITION) state == the memory of information currently rendered on screen */}
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      // moveLocation is an array with two elements recording the row number and column number
      moveLocation: Array(2).fill(null),
      stepNumber: 0,
      xIsNext: true,
    };
  }

  // handleClick is a method to handle the event where a user made a click on a interactive button
  handleClick(index) {
    // make a copy of the current state of the squares
    // .slice() creates a copy of the array, slice([begin index], [end index]) selects everything in between those indices inclusive on the begin index and exclusive on end index
    // reads state: history
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    // grabs the last move/board situation
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // TODO: Keep track of the col, row position of each of the moves
    //  can start by changing building of the board using for loops
    // TODO: BOLD Current Selected Move



    // check if the game's already over or square was already picked
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    // make modifications to the copy
    squares[index] = this.state.xIsNext ? "X" : "O";
    // update the state of the squares
    this.setState({
      // use concat() intead of push() because it prevents mutation to the original object which we like and want
      history: history.concat([{squares: squares}]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    if (step === 0) {
      this.setState({
        history: [{
          squares: Array(9).fill(null),
        }],
      })
    }
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares, this.state.stepNumber);

    
    // .map() method creates a new array with the results of calling a function for every array element.
    const moves = history.map((step, move) => {
      const desc = move ?
        "Go to move #" + move : 
        "Restart";
      /* 
        When we render a list, React stores some information about each rendered list item. When we update a list, React needs to determine what has changed. We could have added, removed, re-arranged, or updated the list’s items. 
        {key} is a special and reserved property in React (along with ref, a more advanced feature). When an element is created, React extracts the key property and stores the key directly on the returned element. Even though key may look like it belongs in props, key cannot be referenced using this.props.key. React automatically uses key to decide which components to update. A component cannot inquire about its key.
      */
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    })

    let status; 
    if (winner === "O" || winner === "X") {
      status = "Winner: " + winner;
    } else if (winner === "draw" ) {
      status = "Draw!"
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    
    return (
      <div className={Styles.game}>
        <div className={Styles.gameBoard}>
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className={Styles.gameInfo}>
          <div>{status}</div>
          {/* 
            It’s strongly recommended that you assign proper keys whenever you build dynamic lists.  
            Keys do not need to be globally unique; they only need to be unique between components and their siblings.
          */}
          <ul className={Styles.gameBoard} id="prev-moves">{moves}</ul>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares, stepNum) {
  console.log("calculating winner" + stepNum);
  // If owns any set of these three will have a line in tic-tac-toe thereforee winning the game
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // For loop to check through all the win conditions
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // checking if all blocks in that line are owned by the same player
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    } else if (stepNum === 9) {
      return "draw";
    }
  }
  return null;
}

export default Game;

