import React, { useEffect, useRef } from 'react';

import HubChoice from './HubChoice';
import Squares from './../UIElements/Squares';
import Circles from './../UIElements/Circles';
import './Hub.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

const SECTIONS = [
  {
    id: 1,
    title: 'ABOUT',
    route: '/about',
    info: 'Eventually something more...'
  }, {
    id: 2,
    title: 'PORTFOLIO',
    route: '/portfolio',
    info: 'Eventually something more...'
  }, {
    id: 3,
    title: 'MEMBERS',
    route: '/about/members',
    info: 'Eventually something more...'
  }, {
    id: 4,
    title: 'CONTACT',
    route: '/about/contact',
    info: 'Eventually something more...'
  },
  // {
  //   title: 'AUTHENTICATION',
  //   route: '/auth',
  //   info: 'Eventually something more...'
  // },
]

const Hub = () => {
  let parallax;
  let colors = ['#851d41', '#db3056', '#ff6464', '#ffb99a']
  let count = 0;
  return (
    <div id='hub-container'>

      <Parallax id='parallax' pages={ SECTIONS.length } ref={ref => parallax = ref}>


        {/* Background Decorational Layers */}
        <ParallaxLayer offset={0.3} speed={-0.8}>
          <Circles length='20rem' color={colors[1]} positionX='10%'/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={0.6}>
          <Circles length='20rem' color={colors[2]} positionX='80%'/>
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={0.6}>
          <Circles length='20rem' color={colors[3]} positionX='60%'/>
        </ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={0.6}>
          <Circles length='20rem' color={colors[0]} positionX='20%'/>
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={-1.6}>
          <Circles length='8rem' color={colors[1]} positionX='30%'/>
        </ParallaxLayer>
        <ParallaxLayer offset={3.8} speed={-0.2}>
          <Circles length='11rem' color={colors[2]} positionX='50%'/>
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={1.2}>
          <Squares length='6rem' color={colors[3]} positionX='50%'/>
        </ParallaxLayer>
        <ParallaxLayer offset={2.4} speed={1}>
          <Squares length='10rem' color={colors[0]} positionX='60%'/>
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={-0.3}>
          <Squares length='9rem' color={colors[1]} positionX='80%'/>
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={1.5}>
          <Squares length='8rem' color={colors[2]} positionX='10%'/>
        </ParallaxLayer>
        <ParallaxLayer offset={3.3} speed={1.5}>
          <Squares length='8rem' color={colors[3]} positionX='20%'/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.5}>
          <Squares length='8rem' color={colors[0]} positionX='30%'/>
        </ParallaxLayer>


        {/* Content layers */}
        { SECTIONS.map(section => {
            return (
              <ParallaxLayer 
                key={section.id}
                factor={1} 
                offset={count++} 
                speed={0.1}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}
              >
                <HubChoice title={section.title} route={section.route} info={section.info} />
              </ParallaxLayer>
            )
          })}


      </Parallax>
    </div>
  )
}

export default Hub;