import React from 'react';

// Image Imports
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


const ImageGallery = (props) => {
  return(
    <div className='image-gallery'>
      {PICTURES.map(picture => (
        <div className='imgbox'>
          <img src={picture.src} alt='images of cute dogs' />
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
