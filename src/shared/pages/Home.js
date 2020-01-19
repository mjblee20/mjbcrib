import React, { Component } from 'react'
import BubbleClump from '../../places/components/BubbleClump';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='container-custom'> 
        <Jumbotron>
          <h1 className='titleHead'>Welcome to MJB_Crib</h1>
          <br />
          <p className='description'>This website will be a place where I put all my work and projects in.</p>
          <hr className="my-2" />
          <p>Below is the list of my skillsets:</p>
          <BubbleClump />
        </Jumbotron>

        <div className='btnRightAlign'> 
          <Button className='portfolioBtn' href='/portfolio' variant='info'>View Portfolio</Button>
        </div>
        
      </div>
    )
  }
}

export default Home
