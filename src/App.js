import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import Navbar from './templates/NavBar/NavBar';
import Home from './pages/Home';
// import Habit from './pages/Habit';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import EditExercise from './components/Exercise/EditExercise'
import CreateExercise from './components/Exercise/CreateExercise';
import CreateUser from './components/Exercise/CreateUser';
import ExerciseLog from './components/Exercise/ExerciseLog';
import User from './components/Exercise/User';

// Styling Import
// import Styles from './App.module.css';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <br />
      <Router>
        <Route path='/' exact component={Home} />

        <Route path='/blog' component={Blog} />

        <Route path='/about' component={About} />

        <Route path='/portfolio' component={Portfolio} />

        <Route path='/contact' component={Contact} />


        {/* This Section is moved to Portfolio */}
        <Route path='/exercises' component={ExerciseLog} />
        <Route path='/exercises/edit/:id' component={EditExercise} />
        <Route path='/exercises/create' component={CreateExercise} />
        
        <Route path='/users' component={User} />
        <Route path='/users/add' component={CreateUser} />

        {/* <Route path='/habits' component={Habit} /> */}
      </Router>
    </div>
  );
}

export default App;
