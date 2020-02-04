// Import Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Import Stylings
import './App.css';

//Import Components
import Welcome from './Pages/Welcome';
// import Home from './Pages/Home';
import Blog from './Pages/Blog';
import BtnNavGrid from './Templates/BtnNavGrid';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import PageDNE from './Pages/PageDNE'
import Styles from './Pages/Styles';

function App() {
  const handleMouseOver = (e) => {
    // TODO: Show coordinates of the cursor
    // TODO: Show Circle following mouse
    // TODO: Add delay to the div following of the mouse
  }

  return (
    <Router>
      {/* <HorizNavGrid /> */}
      <BtnNavGrid />

      <main onMouseOver={handleMouseOver}>
        <Switch>
          <Route exact path='/'>
            <Welcome />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/portfolio'>
            <Portfolio />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>

          {/* <Route path='/blog'>
            <Blog />
          </Route> */}

          <Route path='/styles'>
            <Styles />
          </Route>
          
          <Route path='/pageDNE' component={PageDNE} />
          <Redirect to='/pageDNE' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
