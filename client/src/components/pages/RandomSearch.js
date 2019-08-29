import React, { Component, Fragment } from 'react';
import Tweeter from '../Tweeter';
import Tweet from '../Tweet';

class RandomSearch extends Component {

  state = {
    tweeters: [
      {
      username: "mojombo",
      handle: "@mojombo",
      id: 1,
      avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
      text: "some text",
      date: '12 June 2019'

  },
  {
      username: "defunkt",
      handle: "@defunkt",
      id: 2,
      avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
      text: "some text",
      date: '12 June 2019'
  },
  {
      username: "pjhyett",
      handle: "pjhyett",
      id: 3,
      avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
      text: "some text",
      date: '12 June 2019'
  },
  {
      username: "pjhyett",
      handle: "pjhyett",
      id: 4,
      avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
      text: "some text",
      date: '12 June 2019'
  },
  {
      username: "pjhyett",
      handle: "pjhyett",
      id: 5,
      avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
      text: "some text",
      date: '12 June 2019'
  }],
    tweets: [
      {
          username: "mojombo",
          handle: "@mojombo",
          id: 1,
          avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
          text: "some text",
          date: '12 June 2019'

      },
      {
          username: "defunkt",
          handle: "@defunkt",
          id: 2,
          avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
          text: "some text",
          date: '12 June 2019'
      },
      {
          username: "pjhyett",
          handle: "pjhyett",
          id: 3,
          avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
          text: "some text",
          date: '12 June 2019'
      },
      {
          username: "pjhyett",
          handle: "pjhyett",
          id: 4,
          avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
          text: "some text",
          date: '12 June 2019'
      },
      {
          username: "pjhyett",
          handle: "pjhyett",
          id: 5,
          avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
          text: "some text",
          date: '12 June 2019'
      }
  ],
  }
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
         {this.state.tweets.map(tweet => (
          <Tweet 
              key={tweet.id} tweet={tweet}
          />
      ))}
         </div>
        </div>
      </Fragment>
      )
    }
  }
  
  export default RandomSearch;