import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import './BubbleClump.css';

const SKILLSET = ['MongoDB', 'Javascript', 'React.js', 'CSS', 'HTML', 'GraphQL', 'Node.js', 'Express.js']

function BubbleClump() {
  return (
    <div>
      <Row>
        <span className='bubbleClump'>
          {/* TODO: This should be reading from the database and loading page with info */}
          {
            SKILLSET.map(element => {
              return (<Button variant='light' type='Button' className='bubbles'>{element}</Button>);
            })
          }
        </span>
      </Row>
    </div>
  )
}

export default BubbleClump;
