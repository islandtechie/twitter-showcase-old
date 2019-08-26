import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/pages/Home';
import UserSearch from '../src/components/pages/UserSearch';
import RandomSearch from '../src/components/pages/RandomSearch';
import Navbr from './components/NavBar';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path='/'component={Home} />
      <Route exact path='/user-search' component={UserSearch} />
      <Route exact path='/random-search' component={RandomSearch} />
    </Router>
  );
}

export default App;
