import React from 'react';

import './SkillnExp.css';


const SKILLSET = [ 
  {
    title: 'MongoDB',
  },{
    title: 'Express.js',
  },{
    title: 'React.js',
  },{
    title: 'Node.js',
  },{
    title: 'Git',
  },{
    title: 'HTML',
  },{
    title: 'CSS',
  },{
    title: 'Javascript',
  }
];

export default function SkillnExp() {
  return (
    <div className='skillset-container'>
      <div id='skill-text-container'>
        <div>
          Skills
        </div>
        <div>
          and
        </div>
        <div>
          Experience
        </div>
      </div>
      <div className='skill-list'>
        {
          SKILLSET.map(skill => (
            <div className='skill-item'>
              <div className='skill-title'>{skill.title}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
