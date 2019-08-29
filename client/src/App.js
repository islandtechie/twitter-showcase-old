import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/pages/Home';
import UserSearch from '../src/components/pages/UserSearch';
import RandomSearch from '../src/components/pages/RandomSearch';
import NavBar from './components/NavBar';

class App extends Component {
  state = {
    searchText: null,
    date: null,
    setSearchText: (text) => {
      this.setState({searchText: text})
    }
  }

  componentDidMount() {
    this.setState({ date: new Date(Date.now()).toDateString()})
  }

  render() {
    return (
      <Router>
        <NavBar />
        <Route exact path='/' component={
              props => <Home {...this.state} />
          } />
        <Route exact path='/user-search'
          component={
              props => <UserSearch {...this.state}/>
          }
          />
        <Route exact path='/random-search' component={RandomSearch} />
      </Router>
    );
  }
}

export default App;
