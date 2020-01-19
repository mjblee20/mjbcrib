import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';



import Navbar from './shared/components/AppNavBar';

import Home from './shared/pages/Home';
import Portfolio from './places/pages/Portfolio';
import Resume from './places/pages/Resume';
import About from './places/pages/About';
import Blog from './users/pages/Blog';

import EditExercise from './users/components/EditExercise'
import CreateExercise from './users/components/CreateExercise';
import CreateUser from './users/components/CreateUser';
import ExerciseLog from './users/components/ExerciseLog';
import User from './users/components/User';

import Habit from './users/pages/Habit';
import CreateStack from './users/components/CreateStack';

import Members from './users/pages/Members';

import Todo from './users/components/ToDo';
import CalendarTab from './users/components/CalendarTab';
import TicTacToe from './users/components/TicTacToe';


// Styling Import
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
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
          
          {/* <Route exact path='/users' component={User} /> */}
          {/* <Route path='/users/add' component={CreateUser} /> */}

          <Route path='/todo' component={Todo} />
          <Route path='/calendar' component={CalendarTab} />
          <Route path='/tictactoe' component={TicTacToe} />

          <Route exact path='/habits' component={Habit} />
          <Route path='/habits/createstack' component={CreateStack} />

          <Route exact path='/members' component={Members} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
