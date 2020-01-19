import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import CreateExercise from './CreateExercise';

import API from '../../shared/utils/API';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Button href={'exercises/edit/' + props.exercise._id}>Edit</Button> | <Button className='btn btn-danger' onClick={() => props.delete(props.exercise._id)}>Delete</Button>
    </td>
  </tr> 
)

export class ExerciseLog extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this)
    this.exerciseList = this.exerciseList.bind(this)

    this.state = { 
      exercises: [] 
    }
  }

  componentDidMount() {
    API.get('/exercises/')
    .then(res => {
      console.log('load exercises');
      this.setState({
        exercises: res.data
      })
    })
    .catch(err => console.log(err))
  }

  delete(id) {
    API.delete('/exercises/'+id)
    .then(res => {
      console.log(res.data);
      this.setState({
        exercises: this.state.exercises.filter(el => el._id !== id)
      })
    })
  }

  exerciseList() {
    console.log(this.state.exercises)
    return this.state.exercises.map(currExercise => {
      console.log(currExercise);
      return (<Exercise exercise={currExercise} delete={this.delete}key={currExercise._id} />)
    })
  }

  render() {
    return (
      <div>
        <h1>Exercises List</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
        <hr />
        <CreateExercise />

      </div>
    )
  }
}

export default ExerciseLog;
