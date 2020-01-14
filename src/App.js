import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import Navbar from './templates/AppNavBar/AppNavBar';
import Home from './pages/Home/Home';
// import Habit from './pages/Habit';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import EditExercise from './components/Exercise/EditExercise'
import CreateExercise from './components/Exercise/CreateExercise';
import CreateUser from './components/Exercise/CreateUser';
import ExerciseLog from './components/Exercise/ExerciseLog';
import User from './components/Exercise/User';
import Todo from './components/ToDo/ToDo';
import CalendarTab from './components/CalendarTab/CalendarTab';
import TicTacToe from './components/TicTacToe/TicTacToe';


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

        <Route path='/resume' component={Resume} />


        {/* This Section is moved to Portfolio */}
        <Route path='/exercises' component={ExerciseLog} />
        <Route path='/exercises/edit/:id' component={EditExercise} />
        <Route path='/exercises/create' component={CreateExercise} />
        
        <Route path='/users' component={User} />
        <Route path='/users/add' component={CreateUser} />

        <Route path='/todo' component={Todo} />
        <Route path='/calendar' component={CalendarTab} />
        <Route path='/tictactoe' component={TicTacToe} />
        {/* <Route path='/habits' component={Habit} /> */}
      </Router>
    </div>
  );
}

export default App;
