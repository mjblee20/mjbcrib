import React from 'react';


import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Styles from './Portfolio.module.css';
import AppStyles from './../../App.module.css';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    // {/* Setting the 'state' of the Component */}
    // {/* (DEFINITION) state == the memory of information currently rendered on screen */}
    this.state = {
      activity: '',
      duration:'',

    };
  }

  // Pings API for project information

  render() {
    return (
      <div>
        {/* TODO: center and add color box with margin underneath the Portfolio title */}
        <Row className={AppStyles.sectionTitleRow}>
          <h2 className={AppStyles.sectionTitle}>Portfolio</h2>
        </Row>

        {/* get from database and populate the section with up to 3 projects */}

        {/* allow adding to database with new projects */}

        {/* TODO: List of projects in card formats */}
        {/* TODO: Button for every card to github and the page they are located */}
        {/* TODO: Maybe scrap github to grab information for the newest projects etc. */}
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni cum inventore saepe tempore, facilis magnam ea itaque quasi optio repellat atque qui libero laboriosam laborum sint dolorum aut nobis?</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni cum inventore saepe tempore, facilis magnam ea itaque quasi optio repellat atque qui libero laboriosam laborum sint dolorum aut nobis?</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni cum inventore saepe tempore, facilis magnam ea itaque quasi optio repellat atque qui libero laboriosam laborum sint dolorum aut nobis?</span>
      </div>
    );
  }
}

export default Portfolio;