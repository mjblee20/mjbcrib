// Import Dependencies
import React from 'react';

// Import Stylings
import './ContactGrid.css';
import PageHeader from '../Organisms/PageHeader';
import PageFooter from '../Organisms/PageFooter';

// Import Components



const ContactGrid = (props) => {
  return(
    <div className='contact-grid-container'>

      <PageHeader title='Contact'  color='var(--teal)'/>
      
      <div className='contact-body'>
        {/* Image */}
        {/* Background */}
        {/* Interests */}
        {/* Contact Info */}
        {/* Fun animation */}
        Rest of content
      </div>
      
      {/* TODO: Eventually it's own js file */}

      <PageFooter title='Footer' />

    </div>
  );
}

export default ContactGrid;