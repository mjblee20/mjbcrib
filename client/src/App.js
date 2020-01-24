import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect
} from 'react-router-dom';



import Navbar from './shared/components/Navigation/MainNavigation';

import Home from './shared/pages/Home';

import About from './places/pages/About';

import Portfolio from './places/pages/Portfolio';
import ProjectCards from './places/components/Portfolio/ProjectCards'
import SideProjects from './places/components/Portfolio/SideProjects';
import PlayGround from './places/components/Portfolio/PlayGround';

import Blog from './users/pages/Blog';

import Contact from './places/pages/Contact';

import Resume from './places/pages/Resume';

import EditExercise from './users/components/Exercise/EditExercise'
import CreateExercise from './users/components/Exercise/CreateExercise';
// import CreateUser from './users/components/Exercise/CreateUser';
import ExerciseLog from './users/components/Exercise/ExerciseLog';
// import User from './users/components/Exercise/User';

import Habit from './users/pages/Habit';
import CreateStack from './users/components/Habits/CreateStack';

import Members from './users/pages/Members';
import MemberPlaces from './users/pages/MemberPlaces';


import Todo from './users/components/Productivity/ToDo';
import CalendarTab from './users/components/Productivity/CalendarTab';
import TicTacToe from './places/components/TicTacToe';


// Styling Import
import './App.css';

function App() {

  return (
    <Router>
      
      <Navbar />
      
      <main>
        <Switch>
          <Route path='/' exact component={Home} />

          <Route exact path='/about' component={About} />
          <Route path='/about/members' component={Members} />
          <Route path='/about/contact/' component={Contact} />

          <Route path='/blog' component={Blog} />

          <Route exact path='/portfolio' component={Portfolio} />
          <Route path='/portfolio/projects' component={ProjectCards} />
          <Route path='/portfolio/playground' component={PlayGround} />
          <Route path='/portfolio/sideprojects' component={SideProjects} />

          <Route path='/resume' component={Resume} />


          <Route exact path='/habits' component={Habit} />
          <Route path='/habits/createstack' component={CreateStack} />


          {/* This Section is moved to Portfolio */}
          <Route exact path='/exercises' component={ExerciseLog} />
          <Route path='/exercises/edit/:id' component={EditExercise} />
          <Route path='/exercises/create' component={CreateExercise} />
          
          {/* <Route exact path='/users' component={User} /> */}
          {/* <Route path='/users/add' component={CreateUser} /> */}

          <Route path='/todo' component={Todo} />
          <Route path='/calendar' component={CalendarTab} />
          <Route path='/tictactoe' component={TicTacToe} />

          <Redirect to='/' />
        </Switch>
      </main>
      
    </Router>
  );
}

export default App;
