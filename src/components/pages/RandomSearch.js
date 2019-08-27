import React, { Component, Fragment } from 'react';
import NavBar from '../NavBar';
import Tweeter from '../Tweeter';
import Tweet from '../Tweet';

class RandomSearch extends Component {
    render() {
      return (
        <Fragment>
        <div className="top-content">
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
      )
    }
  }
  
  export default RandomSearch;