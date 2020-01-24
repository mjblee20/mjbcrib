import React from 'react';
import { Link } from 'react-router-dom';

import './LinkHover.css';

const LinkHover = (props) => {
  return (
    <div id='link-animations'>
      <h1 id='link-animation-header'>Links hover animations</h1>
      <div className="link-cont">
          <div className="link-wrapper">
              <Link className="link hover-1" to="/#">#1 - left to right</Link>
          </div>
          <div className="link-wrapper">
              <Link className="link hover-2" to="/#">#2 center to tips</Link>
          </div>
          <div className="link-wrapper">
              <Link className="link hover-3" to="/#">#3 left to right</Link>
          </div>
          <div className="link-wrapper">
              <Link className="link hover-4" to="/#">#4 right to left</Link>
          </div>
          <div className="link-wrapper">
              <Link className="link hover-5" to="/#">#5 scaling height</Link>
          </div>
          <div className="link-wrapper">
              <Link className="link hover-6" to="/#">#6 edges to center</Link>
          </div>
          <div className="link-wrapper">
              <Link className="link hover-7" to="/#">#7 top & bottom, left to right + reverse</Link>
          </div>
          <div className="link-wrapper">
              <Link className="link hover-8" to="/#">#8 top & bottom, left to right</Link>
          </div>
          <div className="link-wrapper">
              <Link className="link hover-9" to="/#">#9 top & bottom, right to left</Link>
          </div>
          <div className="link-wrapper">
              <Link className="link hover-10" to="/#">#10 top & bottom tips to center</Link>
          </div>
          <div className="link-wrapper">
              <Link className="link hover-11" to="/#">#11 top & bottom, scaling height</Link>
          </div>
          <div className="link-wrapper">
              <Link className="link hover-12" to="/#">#12 top & bottom, left to right + reverse</Link>
          </div>
          <div className="link-wrapper">
              <span className="inner-wrapper wrapper-13">
                  <Link className="link hover-13" to="/#">#13 top & bottom, tips to center</Link>
              </span>
          </div>
          <div className="link-wrapper">
              <span className="inner-wrapper wrapper-14">
                  <Link className="link hover-14" to="/#">#14 square effect, center to edges</Link>
              </span>
          </div>
          <div className="link-wrapper">
              <span className="inner-wrapper wrapper-15">
                  <Link className="link hover-15" to="/#">#15 square effect, symetrical</Link>
              </span>
          </div>
          <div className="link-wrapper">
              <span className="inner-wrapper wrapper-16">
                  <Link className="link hover-16" to="/#">#16 square effect, simultaneous</Link>
              </span>
          </div>
          <div className="link-wrapper">
              <span className="inner-wrapper wrapper-17">
                  <Link className="link hover-17" to="/#">#17 square effect, side by side</Link>
              </span>
          </div>
      </div>
    </div>
  )
}

export default LinkHover;
