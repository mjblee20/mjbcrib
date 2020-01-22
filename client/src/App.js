import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect
} from 'react-router-dom';



import Navbar from './shared/components/Navigation/MainNavigation';

import Home from './shared/pages/Home';

import Portfolio from './places/pages/Portfolio/Portfolio';
import ProjectCards from './places/pages/Portfolio/ProjectCards'
import SideProjects from './places/pages/Portfolio/SideProjects';
import PlayGround from './places/pages/Portfolio/PlayGround';

import Resume from './places/pages/Resume';
import About from './places/pages/About';
import Blog from './users/pages/Blog';

import EditExercise from './users/components/Exercise/EditExercise'
import CreateExercise from './users/components/Exercise/CreateExercise';
// import CreateUser from './users/components/Exercise/CreateUser';
import ExerciseLog from './users/components/Exercise/ExerciseLog';
// import User from './users/components/Exercise/User';

import Habit from './users/pages/Habit';
import CreateStack from './users/components/Habits/CreateStack';

import Members from './users/pages/Members';
import MemberPlaces from './users/pages/MemberPlaces';


import Todo from './users/components/ToDo';
import CalendarTab from './users/components/CalendarTab';
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

          <Route path='/blog' component={Blog} />

          <Route path='/about' component={About} />

          <Route exact path='/portfolio' component={Portfolio} />
          <Route path='/portfolio/projects' component={ProjectCards} />
          <Route path='/portfolio/playground' component={PlayGround} />
          <Route path='/portfolio/sideprojects' component={SideProjects} />

          <Route path='/resume' component={Resume} />


          <Route exact path='/habits' component={Habit} />
          <Route path='/habits/createstack' component={CreateStack} />

          <Route exact path='/members' component={Members} />
          <Route path='/members/:memberId/places' component={MemberPlaces} />

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
