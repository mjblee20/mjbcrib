import React from 'react';

import LinkHover from '../../../shared/components/UIElements/LinkHover';
import Glitchy from '../../../shared/components/UIElements/Glitchy';
import LinkToButton from '../../../shared/components/UIElements/LinkToButton';
import './PlayGround.css';

const PlayGround = (props) => {
  return (
    <div>
      {/* Make Link Hover a reusable component with all the different types of hovers */}
      <LinkHover />

      {/* Make Glitchy a reusable component that wraps a button or link */}
      <Glitchy />

      <LinkToButton route='#'>
        Click Me!
      </LinkToButton>
    </div>
  )
}

export default PlayGround;