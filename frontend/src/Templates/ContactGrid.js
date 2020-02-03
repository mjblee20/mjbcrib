// Import Dependencies
import React from 'react';

// Import Stylings
import './ContactGrid.css';
import PageHeader from '../Organisms/PageHeader';
import PageFooter from '../Organisms/PageFooter';
import { 
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
  TiSocialAtCircular,
  TiLocation,
} from "react-icons/ti";
import { IconContext } from "react-icons";

const email = 'mjblee20@gmail.com';
const location = 'Seattle, WA';
const github = 'https://github.com/mjblee20';
const linkedIn = 'https://www.linkedin.com/in/mjblee20/';

const ContactGrid = (props) => {
  return(
    <div className='contact-grid-container'>

      <PageHeader title='Contact'  color='var(--teal)'/>
      
      <div className='contact-body'>
        <div className="contact-intro">
          <h1>GET IN TOUCH</h1>
          <hr />
          {/* TODO: Short bar */}
          <p>So what did you think? Got any opinions, compliments, suggestions, critiques? Feel free to send me an email or post a message on the site! Any input would be greatly appreciated. Also if there are some great resources you think can help feel free to post them here.</p>
        </div>
        <div className="contact-message">
          <h1>TALK TO ME!</h1>
          <div>
            <h2>You have any suggestions or critiques?</h2>

            <form className='message-form'>
              <label for="type">Type:</label>
              <select id="response-type" name="type">
                <option value="critique">Critique</option>
                <option value="compliment">Compliment</option>
                <option value="suggestion">Suggestion</option>
                <option value="recommendation">Recommendation</option>
              </select>
              <br />
              <label for='name'>Name:</label>
              <input type='text' className='name-input'/>
              <label for='email'>Email</label>
              <input type='email' className='email-input'/>
              <label for='Message'>Message</label>
              <textarea type='text' className='message-input'/>
            </form>
          </div>
          <div>
            <button>Send</button>
          </div>
        </div>
        <div className="contact-info">
          <div>
            <IconContext.Provider value={{ className: 'contact-icons' }}>
              <TiSocialGithubCircular size={60}/>
            </IconContext.Provider>
            <span>
              GitHub: {github}
            </span>
          </div>
          <div>
            <IconContext.Provider value={{ className: 'contact-icons' }}>
              <TiSocialLinkedinCircular size={60}/>
            </IconContext.Provider>
            
            <span>
              LinkedIn: {linkedIn}
            </span>
          </div>
          <div>
            <IconContext.Provider value={{ className: 'contact-icons' }}>
              <TiSocialAtCircular size={60}/>
            </IconContext.Provider>
            <span>
              Email: {email}
            </span>
          </div>
          <div>
            <IconContext.Provider value={{ className: 'contact-icons' }}>
              <TiLocation size={60}/>
            </IconContext.Provider>
            <span>
              Location: {location}
            </span>
          </div>
        </div>
        
      </div>
      
      {/* TODO: Eventually it's own js file */}

      <PageFooter title='Footer' />

    </div>
  );
}

export default ContactGrid;