import React, { Component} from 'react';

class Home extends Component {
  render() {
    return(
      <div className="container">
    <div className="logo">
    <img src="_assets/t-logo.png" alt=""/>
  </div>
  <div className="search-area">
    <div className="user-search tweet">
      <div className="tweet_avatar">
        <img src="_assets/t-logo.png" alt=""/>
      </div>
      <div className="tweet__body">
        <div className="tweet_body_header">
          <span className="tweet__username">SearchForATweet</span>
          <span className="tweet__handle">@SearchForATweet</span>&#8226;
          <span className="tweet__date">24 May, 2019</span>
        </div>
        <div className="tweet_body_text">
          <p>Use the Search box below to search for a tweet from someone you follow! You can search by <em>@twitter_handle</em> or <em>tweet content</em>.</p>
          <input type="text" id="user-search" placeholder="@elonmusk or 'bananas"/>
        </div>
      </div>
    </div>
    <div className="random-search tweet">
      <div className="tweet_avatar">
        <img src="_assets/t-logo.png" alt=""/>
      </div>
      <div className="tweet__body">
        <div className="tweet_body_header">
          <span className="tweet__username">RandomTweet</span>
          <span className="tweet__handle">@SearchARandomTweet</span>&#8226;
          <span className="tweet__date">24 May, 2019</span>
        </div>
        <div className="tweet_body_text">
          <p>Use the Grab-A-Tweet button to search for a random tweet from people we follow! <em>#InspirationLaughsSelfDevlopment</em></p>
          <button type="button" id="random-search">Grab-A-Tweet</button>
        </div>
      </div>
    </div>
  </div>
    </div>
    );
  }
}

export default Home;