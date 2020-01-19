import React from 'react';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './HabitStacker.css';

function StackItem(props) {
  // TODO: You can choose to view in table format or bubble format
  return (
    <Col>
      <h4 className='stackNumber'>Stack Number: {props.id}</h4>
      <ul>
        <li><Button>Desire: {props.desire}</Button></li>
        <li><Button>Wanted: {props.wanted}</Button></li>
      </ul>
    </Col>
  )
}

export default StackItem;