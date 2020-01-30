import React from 'react';

import './SkillList.css';

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

export default function SkillList() {
  return (
    <div className='skill-list'>
      {
        SKILLSET.map(skill => (
          <div className='skill-item'>
            <div className='skill-title'>{skill.title}</div>
          </div>
        ))
      }
    </div>
  )
}
