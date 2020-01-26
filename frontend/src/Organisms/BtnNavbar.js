// Import Dependencies
import React from 'react';

// Import Stylings
import './BtnNavbar.css';

// Import Components
import NavBrand from '../Atoms/NavBrand';
import BtnNavLinkGroup from '../Compounds/BtnNavLinkGroup';

const Navbar = (props) => {

  return (
    
    <React.Fragment>
      <div className='navbar'>

        {/* My Webpage's Brand */}
        <NavBrand>

        </NavBrand>

        {/* My ways to navigate around my webpages */}

      </div>
    </React.Fragment>
  );
}

export default Navbar;
