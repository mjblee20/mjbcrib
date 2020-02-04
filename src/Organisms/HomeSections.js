import React from 'react';

import HomeSectionChoice from '../Compounds/HomeSectionChoice';
import './HomeSections.css';

const SECTIONS = [
  {
    title: 'ABOUT',
    route: '/about',
    color: 'var(--red)'
  },
  {
    title: 'PORTFOLIO',
    route: '/portfolio',
    color: 'var(--skin)'
  },
  {
    title: 'STYLES',
    route: '/styles',
    color: 'var(--lightergray)'
  },
  {
    title: 'BLOG',
    route: '/blog',
    color: 'var(--navy)'
  },
  {
    title: 'CONTACT',
    route: '/contact',
    color: 'var(--teal)'
  }
]

const HomeSections = (props) => {
  return (
    <div className='home-content-container'>
      {SECTIONS.map(section => (
        <HomeSectionChoice title={section.title} route={section.route} color={section.color}/>
      ))}
    </div>
  )
}

export default HomeSections;
