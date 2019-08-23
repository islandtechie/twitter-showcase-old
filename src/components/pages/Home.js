import React, { Component, Fragment } from 'react';
import Tweet from '../Tweet';

class Home extends Component {


  render() {
    
    return(
      <div className="container">
      <div className="logo">
      <img src="_assets/t-logo.png" alt=""/>
    </div>
    <div className="search-area">
      <Tweet 
      username="SearchForATweet"
      handle="@SearchForATweet"
      text={["Use the Search box below to search for a tweet from someone you follow! You can search by ",<em>@twitter_handle</em>, " or " ,<em>tweet content</em>,"."]}
      inputText=""
      inputID="user-search"
      inputPlaceholder="@elonmusk or 'bananas"
      />
      <Tweet 
      username="RandomTweet"
      handle="@SearchARandomTweet"
      text={["Use the Grab-A-Tweet button to search for a random tweet from people we follow! ",<em>#InspirationLaughsSelfDevlopment</em>]}
      inputElement="Button"
      inputText="Grab-A-Tweet"
      inputID="random-search"
      inputPlaceholder="@elonmusk or 'bananas"
      />
    </div>
      </div>
    );
  }
}

export default Home;