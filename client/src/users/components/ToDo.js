import React from 'react';

import 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';

// import Styles from './ToDo.module.css';

// TODO: reset text box to new task after adding a task
// TODO: Drag and Drop to rearrange Prioritized Items
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    // {/* Setting the 'state' of the Component */}
    // {/* (DEFINITION) state == the memory of information currently rendered on screen */}
    this.state = {
      item: 'New Task',
      list: ['work', 'eat', 'sleep'],
      completed: [],
    };
  }

  onChange = (event) => {
    this.setState({item: event.target.value});
  }

  addTask = (event) => {
    event.preventDefault();
    this.setState({
      // addes the new item to the already existing list of todos
      list: [...this.state.list, this.state.item],
    });
  }

  removeTask = (event) => {
    event.preventDefault();
    let completedItem = this.state.list.splice(event.target.dataset.index, 1);
    this.setState({
      list: this.state.list,
      completed: [...this.state.completed, completedItem],
    })
  }

  render() {
    return(
      <div id="to-do-list">
        <Table responsive="sm" striped bordered hover variant="dark" id="list">
          <thead>
            <tr>
              <th>
                <h4>TODO:</h4>
                <Form id="new-item-form" inline>
                <InputGroup>
                    <InputGroup.Prepend >
                      <InputGroup.Text id="addon" onClick={this.addTask} value={this.state.item} >+</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      onChange={this.onChange}
                      placeholder={this.state.item}
                      aria-label="item"
                      aria-describedby="addon"
                    />
                  </InputGroup>
                </Form>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.list.map((item, index) => {
                return(
                  <tr key={index}>
                    <td className="d-flex justify-content-between">
                      <span className="align-middle">{item}</span>
                      <Button className="removeBtn" data-index={index} onClick={this.removeTask} variant='danger'>X</Button>
                    </td>
                    
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    );
  }
}


export default ToDoList;