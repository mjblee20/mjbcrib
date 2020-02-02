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
        <div className="contact-intro">
          <h1>GET IN TOUCH</h1>
          {/* TODO: Short bar */}
          <p>So what did you think? Got any opinions, compliments, suggestions, critiques? Feel free to send me an email or post a message on the site! Any input would be greatly appreciated. Also if there are some great resources you think can help feel free to post them here.</p>
        </div>
        <div className="contact-message">
          <h1>TALK TO ME!</h1>
          <div>
            <h2>You have any suggestions or critiques?</h2>
            <form className='email-form'>
              <input type='text' placeholder='Your Name' />
              <input type='email' placeholder='Your Email' />
              <input type='text' placeholder='Your Message' />
            </form>

            <form className='message-form'>
              <input type='text' placeholder='Your Name' />
              <input type='email' placeholder='Your Email' />
              <input type='text' placeholder='Your Message' />
            </form>
          </div>
          <div>
            <button>Send</button>
          </div>
        </div>
        <div className="contact-info">

        </div>
        
      </div>
      
      {/* TODO: Eventually it's own js file */}

      <PageFooter title='Footer' />

    </div>
  );
}

export default ContactGrid;