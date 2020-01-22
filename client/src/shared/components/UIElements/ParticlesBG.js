import React from 'react';
import Particles from 'react-particles-js';

import './ParticlesBG.css';

const particles_config = require('./particlesjs-config.json');

const ParticlesBG = (props) => {
  return (
    <div id='particles-animation'>
      <Particles id='particles-screen' params={particles_config}>
        {props.children}
      </Particles>
    </div>
  );
}

export default ParticlesBG;
