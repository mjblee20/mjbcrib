import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';



import Navbar from './shared/AppNavBar/AppNavBar';

import Home from './places/pages/Home/Home';
import Portfolio from './places/pages/Portfolio/Portfolio';
import Resume from './places/pages/Resume/Resume';
import About from './places/pages/About/About';
import Blog from './users/pages/Blog/Blog';

import EditExercise from './users/components/Exercise/EditExercise'
import CreateExercise from './users/components/Exercise/CreateExercise';
import CreateUser from './users/components/Exercise/CreateUser';
import ExerciseLog from './users/components/Exercise/ExerciseLog';
import User from './users/components/Exercise/User';

import Habit from './users/pages/Habit/Habit';
import CreateStack from './users/components/HabitStacker/CreateStack';

import Users from './users/pages/Users/Users';

import Todo from './users/components/ToDo/ToDo';
import CalendarTab from './users/components/CalendarTab/CalendarTab';
import TicTacToe from './users/components/TicTacToe/TicTacToe';


// Styling Import
// import Styles from './App.module.css';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <br />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />

          <Route path='/blog' component={Blog} />

          <Route path='/about' component={About} />

          <Route path='/portfolio' component={Portfolio} />

          <Route path='/resume' component={Resume} />


          {/* This Section is moved to Portfolio */}
          <Route exact path='/exercises' component={ExerciseLog} />
          <Route path='/exercises/edit/:id' component={EditExercise} />
          <Route path='/exercises/create' component={CreateExercise} />
          
          <Route exact path='/users' component={User} />
          <Route path='/users/add' component={CreateUser} />

          <Route path='/todo' component={Todo} />
          <Route path='/calendar' component={CalendarTab} />
          <Route path='/tictactoe' component={TicTacToe} />

          <Route exact path='/habits' component={Habit} />
          <Route path='/habits/createstack' component={CreateStack} />

          <Route exact path='/users' component={Users} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
