import React from 'react';

// Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './AppNavBar.css';

class AppNavBar extends React.Component {
  render() {
    return(
        <Navbar fixed='top' bg='dark' variant='dark' expand='sm' className='d-flex justify-content-between' style={{ 'background-color':'#393e46' }}>
          <div>
            <Navbar.Brand className='customBrand' href='/'>MJB.</Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {/* Items that will collapse beyond certain screen size */}
            <Navbar.Collapse id="responsive-navbar-nav">
              {/* Links to each section of the webpage */}
              <Nav className='mr-auto'>
                <Nav.Link href='/about' className='nav-link-custom'>About</Nav.Link>
                {/* <Nav.Link href='/blog'  className='customLinks'>Blog</Nav.Link> */}
                <Nav.Link href='/portfolio' className='nav-link-custom' variant='custom'>Portfolio</Nav.Link>
                <Nav.Link href='/users' className='nav-link-custom' variant='custom'>Users</Nav.Link>
                {/* <Nav.Link href='/resume'  className='customLinks'>Resume</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
    )
  }
}
export default AppNavBar;
