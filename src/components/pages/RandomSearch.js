import React, { Component, Fragment } from 'react';
import Tweet from '../Tweet';
import NavBar from '../NavBar';
import Tweeter from '../Tweeter';

class RandomSearch extends Component {
  render() {
    return (
      <div>
      <Fragment>
      <div className="top-content">
      <NavBar />
     <div className="header">
      <div className="title-bar">
        <p>Grab-A-Tweet</p>
      </div>
     </div>
      </div>
      <div className="random-container">
       <div className="tweeters">
          <Tweeter />
          <Tweeter />
          <Tweeter />
          <Tweeter />
          <Tweeter />
       </div>
       <div className="tweet-area">
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
       </div>
      </div>
    </Fragment>
      </div>
    )
  }
}

export default RandomSearch
