import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import CreateExercise from './CreateExercise';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      {/* <Link to={'/edit/' + props.exercise._id}>Edit</Link> | <Button className='btn btn-danger' onClick={props.delete(props.exercise._id)}>Delete</Button> */}
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
    axios.get('http://localhost:5000/exercises/')
    .then(res => {
      console.log('load exercises');
      this.setState({
        exercises: res.data
      })
    })
    .catch(err => console.log(err))
  }

  delete(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
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