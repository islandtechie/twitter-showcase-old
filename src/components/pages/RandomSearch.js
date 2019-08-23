import React, { Component, Fragment } from 'react';
import Tweet from '../Tweet';
import NavBar from '../NavBar';

export class RandomSearch extends Component {
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
          <div className="tweeter">
              <img src="https://avatars0.githubusercontent.com/u/1?v=4" alt=""/>
              <span className="tweeter-name">Elon Musk</span>
              <span className="tweeter-handle">@tweet_handle</span>
          </div>
          <div className="tweeter">
              <img src="https://avatars0.githubusercontent.com/u/1?v=4" alt=""/>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
          <div className="tweeter">
              <img src="https://avatars0.githubusercontent.com/u/1?v=4" alt=""/>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
          <div className="tweeter">
              <img src="https://avatars0.githubusercontent.com/u/1?v=4" alt=""/>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
          <div className="tweeter">
              <img src="https://avatars0.githubusercontent.com/u/1?v=4" alt=""/>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
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
