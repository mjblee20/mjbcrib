import React, { Component } from 'react'
import KnowledgeCluster from '../../places/components/KnowledgeCluster';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div> 
        <Jumbotron>
          <h1 className='titleHead'>Welcome to MJB_Crib</h1>
          <br />
          <p className='description'>This website will be a place where I put all my work and projects in.</p>
          <br />
          <hr className="my-2" />
          <br />
          <p>Below is the list of my skillsets:</p>
          <KnowledgeCluster />
        </Jumbotron>

        <div className='btnRightAlign'> 
          <Button className='portfolioBtn' href='/portfolio' variant='primary'>View Portfolio</Button>
        </div>
        
      </div>
    )
  }
}

export default Home