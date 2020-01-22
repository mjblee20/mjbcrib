import React from 'react';

import HubChoice from './HubChoice';
import './Hub.css';

const SECTION = [
  {
    title: 'ABOUT',
    route: '/about',
    info: 'Eventually something more...'
  }, {
    title: 'PORTFOLIO',
    route: '/portfolio',
    info: 'Eventually something more...'
  }, {
    title: 'MEMBERS',
    route: '/members',
    info: 'Eventually something more...'
  }, {
    title: 'CONTACT',
    route: '/contact',
    info: 'Eventually something more...'
  },
  // {
  //   title: 'AUTHENTICATION',
  //   route: '/auth',
  //   info: 'Eventually something more...'
  // },
]
const Hub = () => {
  return (
    <div id='hub-container'>
      { SECTION.map(section => {
        return <HubChoice title={section.title} route={section.route} info={section.info} />
      })}
      {/* <div className='container'>
        <Link className='section-title' to='/about'>About</Link>
        
        <div className='read-more-overlay'>
          <div>
            <button className='read-more-btn'>Read More...</button>
          </div>
          <div className='more-info-overlay'>


          </div>
        </div>
      </div> */}
      
    </div>
  )
}

export default Hub;