import React from 'react';
import { TiSocialGithubCircular, TiRss } from "react-icons/ti";
import './Portfolio.css';


function Portfolio() {
  return (
    <>
      <div id="title">
        My Work
      </div>
      <div className="hover-grid">
        <div className='hover-container'>
          <div className="hover-card">
            <div className="face face1">
              <div className="content">
                {/* <img className='icon-img' src={Sketch} alt='icon'/> */}
                <h3>In or Out</h3>
                <div className="btn-grp">
                  <a href="https://github.com/WillCoe/Project1/"><TiSocialGithubCircular size={30}/></a>
                  <a href="https://willcoe.github.io/Project1/"><TiRss size={30}/></a>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h4>Bootcamp Project</h4>
                <br/>
                <p>A web application developed to assist user-indecisiveness in meal planning</p>
              </div>
            </div>
          </div>

          <div className="hover-card">
            <div className="face face1">
              <div className="content">
                {/* <img className='icon-img' src={Startup} alt='icon'/> */}
                <h3>InstaPotty</h3>
                <div className="btn-grp">
                  <a href="https://github.com/ivancho277/fancyBathroom/"><TiSocialGithubCircular size={30}/></a>
                  <a href="instapotty.herokuapp.com/"><TiRss size={30}/></a>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h4>Bootcamp Project</h4>
                <br/>
                <p>A web app to share pictures of bathrooms made you chuckle, gave you pause, or were so dang classy you want to remember them forever.</p>
              </div>
            </div>
          </div>

          <div className="hover-card">
            <div className="face face1">
              <div className="content">
                {/* TODO: On hover show contributor */}
                {/* <img className='icon-img' src={Data} alt='icon'/> */}
                <h3>Habits</h3>
                <div className="btn-grp">
                  <a href="https://github.com/mjblee20/habits"><TiSocialGithubCircular size={30}/></a>
                  {/* Deploy this site. */}
                  {/* <a href="#"><TiRss size={30}/></a> */}
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h4>Solo Project</h4>
                <br/>
                <p>A web app to help those who wish to improve themselves keep track of their habit building progress.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Portfolio;
