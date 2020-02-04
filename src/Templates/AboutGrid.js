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
import SkillnExp from '../Organisms/SkillnExp';
import AboutInfo from '../Organisms/AboutInfo';



const AboutGrid = (props) => {
  return(
    <div className='about-grid-container'>

      <PageHeader title='About' color='var(--red)'/>
      
      <div className='self-portrait'>
        <GridImage source={AboutMain}/>
      </div>

      <BioContent />
      
      <SkillnExp />

      {/* <AboutInfo /> */}

      {/* <ImageGallery /> */}

      <PageFooter title='' />
    </div>
  );
}

export default AboutGrid;