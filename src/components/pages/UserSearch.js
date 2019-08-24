import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';

class UserSearch extends Component {

  state = {
    
  }
  render() {

    console.log(this.props.location.state.searchText);
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
          </div>
       </div>
      </Fragment>
    )
  }
}

export default UserSearch
