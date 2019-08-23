import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/pages/Home';
import UserSearch from '../src/components/pages/UserSearch';
import RandomSearch from '../src/components/pages/RandomSearch';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path='/' render={
            props => (
              <Home />
            )
          }
          ></Route>
          <Route exact path='/user-search' render={
            props => (
              <UserSearch />
            )
          }
          ></Route>
          <Route exact path='/random-search' render={
            props => (
              <RandomSearch />
            )
          }
          ></Route>
        </Switch>
      </div>  
    </Router>
  );
}

export default App;
