import React from 'react';
import Particles from 'react-particles-js';

import './ParticlesBG.css';

const particles_config0 = require('./particlesjs-config0.json');
const particles_config1 = require('./particlesjs-config1.json');

const ParticlesBG = (props) => {
  return (
    <div id='particles-animation'>
      <Particles 
        canvasClassName='particles-screen' 
        params={particles_config1} 
        height="100%"
        width="100%"
      >
        <div id='within-particles'>
          {props.children}
        </div>
      </Particles>
    </div>
  );
}

export default ParticlesBG;
