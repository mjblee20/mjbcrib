// Import Dependencies
import React, { useState } from 'react';

// Import Stylings
import './HorizNavGrid.css';
import Navbar from '../Organisms/BtnNavbar';

// Import Components

// TODO: Button that on hovers dropdown with navlinks
// TODO: Animation for the button when hovered
// TODO: Animation for the dropdown items
const HorizNavGrid = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  // logic of the navigation
  return(
      <div>

        {/* <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer> */}
        <Navbar />
      </div>
    
  )
}

export default HorizNavGrid;

