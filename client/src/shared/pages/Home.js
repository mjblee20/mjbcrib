import React, { Component } from 'react';

import ParticlesBG from './../../shared/components/UIElements/ParticlesBG';
import Card from './../../shared/components/UIElements/Card';
import Hub from './../components/Navigation/Hub';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div id='homepage-container'>

        <ParticlesBG />
        
        <Hub />
        
        {/* 
          Parallax Animation (ONCE I'M GOOD I'LL ACTUALLY MAKE IT A FALLING ANIMATION IN BACKGROUND.) (EVENTUALLY I'M REALLY GOOD I'LL USE THREE.JS TO DO ACTUALLY FALLING ANIMATION)
        */}
      </div>
    )
  }
}

export default Home
