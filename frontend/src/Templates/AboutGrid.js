// Import Dependencies
import React from 'react';

// Image Imports
import AboutMain from '../Images/AboutMain.JPG';
import YawningR from '../Images/image-gallery/YawningR.JPG';
import ToyR from '../Images/image-gallery/ToyR.JPG';
import RunningR from '../Images/image-gallery/RunningR.JPG';
import RunningR1 from '../Images/image-gallery/RunningR1.JPG';
import RunningR2 from '../Images/image-gallery/RunningR2.JPG';
import SmilingR from '../Images/image-gallery/SmilingR.JPG';
import SunnyR2 from '../Images/image-gallery/SunnyR2.JPG';
import FeelingGoodD from '../Images/image-gallery/FeelingGoodD.JPG';
import ElegantR from '../Images/image-gallery/ElegantR.JPG';
import Dewey5 from '../Images/image-gallery/Dewey5.JPG';
import Dewey1 from '../Images/image-gallery/Dewey1.JPG';
import Dewey2 from '../Images/image-gallery/Dewey2.JPG';
import Dewey3 from '../Images/image-gallery/Dewey3.JPG';
import Dewey4 from '../Images/image-gallery/Dewey4.JPG';
import ChillR from '../Images/image-gallery/ChillR.JPG';

// Styling Imports
import './AboutGrid.css';

// Import Components
import PageHeader from '../Organisms/PageHeader';
import PageFooter from '../Organisms/PageFooter';
import GridImage from '../Atoms/GridImage';
import BioContent from '../Compounds/BioContent';


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

const PICTURES = [
  {
    src: ElegantR,
    alt: 'Picture of Dewey looking comfortable'
  },{
    src: Dewey1,
    alt: 'Picture of Dewey looking comfortable'
  },{
    src: RunningR,
    alt: 'Picture of Rango with toys'
  }, {
    src: FeelingGoodD,
    alt: 'Picture of Dewey looking comfortable'
  },{
    src: Dewey5,
    alt: 'Picture of Dewey looking comfortable'
  },{
    src: YawningR,
    alt: 'Picture of Rango yawning' 
  }, {
    src: RunningR1,
    alt: 'Picture of Rango with toys'
  }, {
    src: ToyR,
    alt: 'Picture of Rango with toys'
  }, {
    src: Dewey2,
    alt: 'Picture of Dewey looking comfortable'
  },{
    src: Dewey3,
    alt: 'Picture of Dewey looking comfortable'
  },{
    src: RunningR2,
    alt: 'Picture of Rango with toys'
  }, {
    src: SmilingR,
    alt: 'Picture of Rango with toys'
  }, {
    src: Dewey4,
    alt: 'Picture of Dewey looking comfortable'
  },{
    src: SunnyR2,
    alt: 'Picture of Rango with toys'
  },{
    src: ChillR,
    alt: 'Picture of Rango with toys'
  }
]

const AboutGrid = (props) => {
  return(
    <div className='about-grid-container'>

      <PageHeader title='About' color='var(--red)'/>
      
      <div className='self-portrait'>
        <GridImage source={AboutMain}   />
      </div>

      <BioContent />
      
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

      <div className='habits'>
        <div className='habits-header'>
          <h2>Habits</h2>
        </div>
        <div className='habits-body'>
          <div className='why-habits'>
            <h3>Why I got so into habits... </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi dolor neque ad repellat sapiente iste atque placeat voluptatum dolorum quos, adipisci earum velit ullam qui doloremque molestias perferendis distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate, pariatur eaque aut distinctio ipsam sint, quis dolor tempore nobis omnis dolorem eveniet? Voluptatum aliquam, saepe aut reiciendis nostrum a? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt doloribus id, dolorum aliquid esse deleniti nisi nulla incidunt modi soluta quidem, excepturi vero. Explicabo, ipsum. Obcaecati omnis numquam culpa cum.</p>
          </div>
          <div className='check-habits'>
            <h3>Checkin' in for the day... </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi dolor neque ad repellat sapiente iste atque placeat voluptatum dolorum quos, adipisci earum velit ullam qui doloremque molestias perferendis distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate, pariatur eaque aut distinctio ipsam sint, quis dolor tempore nobis omnis dolorem eveniet? Voluptatum aliquam, saepe aut reiciendis nostrum a? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt doloribus id, dolorum aliquid esse deleniti nisi nulla incidunt modi soluta quidem, excepturi vero. Explicabo, ipsum. Obcaecati omnis numquam culpa cum.</p>
          </div>
          <div className='progress-chart'>
            <h3>Calculating Improvements... </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi dolor neque ad repellat sapiente iste atque placeat voluptatum dolorum quos, adipisci earum velit ullam qui doloremque molestias perferendis distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate, pariatur eaque aut distinctio ipsam sint, quis dolor tempore nobis omnis dolorem eveniet? Voluptatum aliquam, saepe aut reiciendis nostrum a? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt doloribus id, dolorum aliquid esse deleniti nisi nulla incidunt modi soluta quidem, excepturi vero. Explicabo, ipsum. Obcaecati omnis numquam culpa cum.</p>
          </div>
        </div>
      </div>

      <div className='image-gallery'>
        {PICTURES.map(picture => (
          <div className='imgbox'>
            <img src={picture.src} alt='images of cute dogs' />
          </div>
        ))}
      </div>

      <PageFooter title='Footer' />
    </div>
  );
}

export default AboutGrid;