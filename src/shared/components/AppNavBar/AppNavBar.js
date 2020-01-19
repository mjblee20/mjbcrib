import React from 'react';

// Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Styles from './AppNavBar.module.css';

class AppNavBar extends React.Component {
  render() {
    return(
        <Navbar fixed='top' bg='dark' variant='dark' expand='sm' className={`${Styles.background} d-flex justify-content-between`}>
          <div>
            <Navbar.Brand className={Styles.customBrand} href='/'>MJB.</Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {/* Items that will collapse beyond certain screen size */}
            <Navbar.Collapse id="responsive-navbar-nav">
              {/* Links to each section of the webpage */}
              <Nav className='mr-auto'>
                <Nav.Link href='/about' className={Styles.customLinks}>About</Nav.Link>
                <Nav.Link href='/blog'  className={Styles.customLinks}>Blog</Nav.Link>
                <Nav.Link href='/portfolio'  className={Styles.customLinks}>Portfolio</Nav.Link>
                <Nav.Link href='/users'  className={Styles.customLinks}>Users</Nav.Link>
                {/* <Nav.Link href='/resume'  className={Styles.customLinks}>Resume</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      
    )
  }
}
export default AppNavBar;
