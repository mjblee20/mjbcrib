import React, { useState } from 'react';
import { TiSocialGithubCircular, TiSocialLinkedinCircular } from "react-icons/ti";
import { IconContext } from "react-icons";
import './Contact.css';

// TODO: Implement sending an email to me using this form
// const DUMMY = [
//   {
//     id: 1,
//     name: 'Bill',
//     title: 'CheckIn',
//     message: 'Keep at it!'
//   },{
//     id: 2,
//     name: 'Ruby',
//     title: 'CheckIn',
//     message: 'Keep at it!'
//   }
// ]

function Contact() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [toggled, setToggle] = useState(false);


  // const handleSubmit = event => {
  //   event.preventDefault();
  //   DUMMY.push({
  //     id: DUMMY.length + 1,
  //     name: name, 
  //     title: title, 
  //     message: message
  //   })
  //   // TODO: Modal confirmation
  // }

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggled);
  }
  return (
    <div id='contact-grid'>

      <div id='contact-head'>
        <h1 id='contact-title'>Contact Me</h1>
        <hr/>
        <p id='contact-message'>
          Feel free to send me a message! I am always open to discuss about innovative projects, creative ideas and anything in between. 
        </p>
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

      <div id='contact-form'>
        <form >  {/* onSubmit={handleSubmit} */}
          <div id="sender-info">
            <input 
              type='text'
              name='name'
              placeholder='Name' 
              value={name} 
              style={{ width: "45%"}}
              onChange={(e) => { 
                setName(e.target.value) 
              }}
              required
            />
            <input 
              type='text' 
              name='email'
              placeholder='Email' 
              value={email} 
              style={{ width: "45%"}}
              onChange={(e) =>{ 
                setEmail(e.target.value) 
              }}
              required
            />
            <input 
              type='text' 
              name='title'
              placeholder='Title' 
              value={title} 
              style={{ width: "100%"}}
              onChange={(e) =>{ 
                setTitle(e.target.value) 
              }}
              required
            />
          </div>
          
          <div id="sender-message">
            <textarea 
              type='text'
              name='message'
              placeholder='Your message...' 
              value={message} 
              onChange={(e) =>{ 
                setMessage(e.target.value) 
              }}
              required
            />
          </div>
          
          <input type='submit' value='Send Message' id='contact-btn'/> {/* onClick={handleSubmit} */}

        </form>
      </div>

    </div>
  )
}

export default Contact;
