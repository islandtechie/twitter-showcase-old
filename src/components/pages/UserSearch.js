import React, { Component, Fragment } from 'react';
import NavBar from '../NavBar';

class UserSearch extends Component {

  state = {
    searchText: null
  }

  componentDidMount() {
    if (this.props.location.state && this.state.searchText === null)
    {
      this.state.searchText = this.props.location.state.searchText;
    }
  }
  
  render() {
    return (
      <Fragment>
        <div className="top-content">
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
