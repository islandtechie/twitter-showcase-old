import React, { Component, Fragment } from 'react';
import Tweet from '../Tweet';

export class UserSearch extends Component {
  render() {
    return (

      <Fragment>
        <div className="top-content">
        <nav>
        <a href="#">Home</a>
        <a href="#" className="active">User Search</a>
        <a href="#">Random Search</a>
       </nav>
       <div className="header">
        <div className="search-bar">
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
