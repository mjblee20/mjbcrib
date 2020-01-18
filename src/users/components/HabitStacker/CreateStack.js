import React from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function CreateStack(props) {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridDesire">
          <Form.Label>Old Desired Habit</Form.Label>
          <Form.Control type="desire" placeholder="Enter An Old Habit You Desire To Perform" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridWanted">
          <Form.Label>New Wanted Habit</Form.Label>
          <Form.Control type="wanted" placeholder="Enter A New Habit You Want to Perform" />
        </Form.Group>
      </Form.Row>
      <Button variant="primary" type="submit" onClick={props.onSubmit}>Submit</Button>
    </Form>
  )
}

export default CreateStack;