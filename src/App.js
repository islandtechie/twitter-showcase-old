import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/pages/Home';
import UserSearch from '../src/components/pages/UserSearch';
import RandomSearch from '../src/components/pages/RandomSearch';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' render={
            props => (
              <Home />
            )
          }
          ></Route>
          <Route exact path='/user-search' component={UserSearch}></Route>
          <Route exact path='/random-search' render={
            props => (
              <RandomSearch />
            )
          }
          ></Route>
        </Switch>
    </Router>
  );
}

export default App;
