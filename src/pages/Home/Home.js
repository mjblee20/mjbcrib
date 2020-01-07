import React, { Component } from 'react'
import KnowledgeCluster from '../../templates/KnowledgeCluster/KnowledgeCluster';

import Jumbotron from 'react-bootstrap/Jumbotron';

import Styles from './Home.module.css';

class Home extends Component {
  render() {
    return (
      <div> 
        <Jumbotron>
          <div className={Styles.titleBox}>
            <h1 className={Styles.titleHead}>Welcome to MJB_Crib</h1>
          </div>
          
          <p className={Styles.description}>This is a website where I'd be working on my portfolio as well as</p>
          <hr className="my-2" />
          <p>More info</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/portfolio" role="button">Jump to My portfolio</a>
          </p>
        </Jumbotron>
        <KnowledgeCluster />
      </div>
    )
  }
}

export default Home
