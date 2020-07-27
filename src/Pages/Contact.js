import React from 'react';
import { TiSocialGithubCircular, TiSocialLinkedinCircular } from "react-icons/ti";
import { IconContext } from "react-icons";
import './Contact.css';

function Contact() {
  return (
    <div id='contact-grid'>

      <div id='contact-head'>
        <h1 id='contact-title'>Contact Me</h1>
        <hr/>
        <p id='contact-message'>
          Feel free to send me a message! I am always open to discuss about innovative projects, creative ideas and anything in between.
        </p>
        <button className='contact-btn'>
            <a href="mailto:mjblee20@gmail.com?subject=Mail from mjbcrib">Send A Message</a>
        </button>  
        <hr/>
        <div id='info'>
          <h3>Phone: (206)954-9043</h3>
          <h3>Email: mjblee20@gmail.com</h3>
          <h3>Location: Bellevue, WA</h3>
          <ul className='noStyle'>
            <li>
              <a href='https://www.linkedin.com/in/mjblee20/'>
                <IconContext.Provider value={{ color: "rgb(245, 245, 245, 0.8)"}}>
                  <TiSocialLinkedinCircular size={50}/>
                </IconContext.Provider>
              </a>
            </li>
            <li>
              <a href='https://github.com/mjblee20'>
                <IconContext.Provider value={{ color: "rgb(245, 245, 245, 0.8)"}}>
                  <TiSocialGithubCircular size={50}/>
                </IconContext.Provider>
              </a>
            </li>
            
          </ul>
        </div>
      </div>


    </div>
  )
}

export default Contact;
