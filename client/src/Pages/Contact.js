import React, { useState } from 'react';
import { TiSocialGithubCircular, TiSocialLinkedinCircular } from "react-icons/ti";
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
        <h1 id='contact-title'>Looking to Hire?</h1>
        <hr/>
        <p id='contact-message'>
          Please feel free to shoot me an email with the form!
        </p>
        <hr/>
        <div id='info'>
          <h3>Phone: (206)954-9043</h3>
          <h3>Email: mjblee20@gmail.com</h3>
          <h3>Location: Bellevue, WA</h3>
          <ul className='noStyle'>
            <li><a href='https://github.com/mjblee20'><TiSocialGithubCircular size={60}/></a></li>
            <li><a href='https://www.linkedin.com/in/mjblee20/'><TiSocialLinkedinCircular size={60}/></a></li>
          </ul>
        </div>
      </div>

      <div id='contact-form'>
        <h2 style={{ marginLeft: '10px' }}>What Did You Think?</h2>
        <form >  {/* onSubmit={handleSubmit} */}
          <div>
            <input 
              type='text'
              name='name'
              placeholder='Name' 
              value={name} 
              onChange={(e) => { 
                setName(e.target.value) 
              }}
              required
            />
          </div>
          
          <div>
            <input 
              type='text' 
              name='title'
              placeholder='Title' 
              value={title} 
              onChange={(e) =>{ 
                setTitle(e.target.value) 
              }}
              required
            />
          </div>
          
          <div>
            <textarea 
              type='text'
              name='message'
              placeholder='Message' 
              value={message} 
              style={{ 
                height: '250px' 
              }} 
              onChange={(e) =>{ 
                setMessage(e.target.value) 
              }}
              required
            />
          </div>
          
          <input type='submit' id='contact-btn'/> {/* onClick={handleSubmit} */}

        </form>
      </div>
      {/* <div id="posts-container">
        {toggled ? (
          <button type='button' onClick={handleToggle}>View Messages</button>
        ) : (
          <ul id='posts' className='noStyle'>
            {console.log(DUMMY)}
            {DUMMY.map(post => (
              <li className='post' key={post.id}>
                <div className="name">
                  {post.name}
                </div>
                <div className="title">
                  {post.title}
                </div>
                <div className="message">
                  {post.message}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div> */}
    
    </div>
  )
}

export default Contact;
