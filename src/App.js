import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import Navbar from './templates/NavBar/NavBar';
import Home from './pages/Home';
import Habit from './pages/Habit';
import Exercise from './pages/Exercise';
import User from './pages/User';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';

// import EditExercise from './components/EditExercise'
// import CreateExercise from './components/CreateExercise';
// import CreateUser from './components/CreateUser';

// Styling Import
import Styles from './App.module.css';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <br />
      <Router>
        <Route path='/' exact component={Home} />
        {/* <Route path='/edit/:id' component={EditExercise} /> */}
        {/* <Route path='/create' component={CreateExercise} /> */}
        {/* <Route path='/user' component={CreateUser} /> */}

        <Route path='/blog' component={Blog} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Route path='/habits' component={Habit} />
        <Route path='/exercises' component={Exercise} />
        <Route path='/users' component={User} />
      </Router>
    </div>
  );
}

export default App;
