import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Tweet from '../Tweet';
import NavBar from '../NavBar';

class UserSearch extends Component {
  render() {
    return (

      <Fragment>
        <div className="top-content">
        <NavBar />
       <div className="header">
        <div className="title-bar">
          <input type="text" id="user-search" placeholder="Elon Musk"/>
        </div>
       </div>
        </div>
        <div className="user-container">
          <div className="tweets">
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          </div>
       </div>
      </Fragment>
    )
  }
}

export default UserSearch
