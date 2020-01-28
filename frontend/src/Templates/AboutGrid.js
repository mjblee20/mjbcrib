// Import Dependencies
import React from 'react';

// Image Imports
import AboutMain from '../Images/AboutMain.JPG';

// Styling Imports
import './AboutGrid.css';

// Import Components
import PageHeader from '../Organisms/PageHeader';
import PageFooter from '../Organisms/PageFooter';
import GridImage from '../Atoms/GridImage';
import BioContent from '../Compounds/BioContent';
import ImageGallery from '../Compounds/ImageGallery';
import SkillnExp from './../Organisms/SkillnExp';



const AboutGrid = (props) => {
  return(
    <div className='about-grid-container'>

      <PageHeader title='About' color='var(--red)'/>
      
      <div className='self-portrait'>
        <GridImage source={AboutMain}   />
      </div>

      <BioContent />
      
      <SkillnExp />

      <div className='habits'>
        <div className='habits-header'>
          <h2>Habits</h2>
        </div>
        <div className='habits-body'>
          <div className='why-habits'>
            <h3>Why I got so into habits... </h3>
            {/* TODO: Amazon book link to James Clear's book */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi dolor neque ad repellat sapiente iste atque placeat voluptatum dolorum quos, adipisci earum velit ullam qui doloremque molestias perferendis distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate, pariatur eaque aut distinctio ipsam sint, quis dolor tempore nobis omnis dolorem eveniet? Voluptatum aliquam, saepe aut reiciendis nostrum a? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt doloribus id, dolorum aliquid esse deleniti nisi nulla incidunt modi soluta quidem, excepturi vero. Explicabo, ipsum. Obcaecati omnis numquam culpa cum.</p>
          </div>
          <div className='check-habits'>
            <h3>Checkin' in for the day... </h3>
            {/* TODO: A check in button and a place to check progress done */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi dolor neque ad repellat sapiente iste atque placeat voluptatum dolorum quos, adipisci earum velit ullam qui doloremque molestias perferendis distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate, pariatur eaque aut distinctio ipsam sint, quis dolor tempore nobis omnis dolorem eveniet? Voluptatum aliquam, saepe aut reiciendis nostrum a? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt doloribus id, dolorum aliquid esse deleniti nisi nulla incidunt modi soluta quidem, excepturi vero. Explicabo, ipsum. Obcaecati omnis numquam culpa cum.</p>
          </div>
          <div className='progress-chart'>
            <h3>Calculating Improvements... </h3>
            {/* TODO: Graph display of how much you've improved with everyday you're 1% better than you were recording each and every time you successfully maintained a habit or failed to keep it up */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi dolor neque ad repellat sapiente iste atque placeat voluptatum dolorum quos, adipisci earum velit ullam qui doloremque molestias perferendis distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate, pariatur eaque aut distinctio ipsam sint, quis dolor tempore nobis omnis dolorem eveniet? Voluptatum aliquam, saepe aut reiciendis nostrum a? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt doloribus id, dolorum aliquid esse deleniti nisi nulla incidunt modi soluta quidem, excepturi vero. Explicabo, ipsum. Obcaecati omnis numquam culpa cum.</p>
          </div>
        </div>
      </div>

      <ImageGallery />

      <PageFooter title='Footer' />
    </div>
  );
}

export default AboutGrid;