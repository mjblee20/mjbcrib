import React, { Component } from 'react'

// import Row from 'react-bootstrap/Row';
// import AppStyles from './../../App.module.css';

import BubbleClump from '../../components/BubbleClump/BubbleClump';


class KnowledgeCluster extends Component {

  // TODO: Onclick on each of the buttons will animate and display the number of hours of experience
  // TODO: Visual Effects
  // TODO: Adding more skills onto the knowledge cluster


  render() {
    return (
      <div>
        <BubbleClump />
        {/* TODO: A place to add a new language to list */}
      </div>
    )
  }
}

export default KnowledgeCluster;
