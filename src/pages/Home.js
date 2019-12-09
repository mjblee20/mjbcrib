import React, { Component } from 'react'
import KnowledgeCluster from './../templates/KnowledgeCluster/KnowledgeCluster';
import CreateExercise from '../components/CreateExercise';

class Home extends Component {
  render() {
    return (
      <div> 
        <KnowledgeCluster />
        <CreateExercise />
      </div>
    )
  }
}

export default Home
