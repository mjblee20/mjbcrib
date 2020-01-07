import React from 'react';

import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// import Styles from './Contact.module.css';
import AppStyles from './../../App.module.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    // {/* Setting the 'state' of the Component */}
    // {/* (DEFINITION) state == the memory of information currently rendered on screen */}
    this.state = {
      activity: '',
      duration:'',

    };
  }
  render() {
    return (
      <Container>
        
      <Row className={AppStyles.sectionTitleRow}>
          <h2 className={AppStyles.sectionTitle}>Contact</h2>
        </Row>
        <div>
          <h3>Links</h3>

          {/* TODO: Display Github */}
          <div id='GitHub'>

          </div>
          
          <div id='LinkedIn'>

          </div>

          <div id='info'>
            <p>Email</p>
            <p>Resume</p>
          </div>

        </div>
        {/* TODO: Display Hours Experience on each skill I have */}
        {/* TODO: Display Email *}
        {/* TODO: Display Resume */}
        
      </Container>
    );
  }

}

export default Contact;