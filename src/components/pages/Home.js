import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Search from '../Search';
import Button from '../Button';

class Home extends Component {
 state = {
  searchText: null,
 };

 setSearchText = (text) => {
   this.setState({ searchText: text});
 }

  render() {
    if (this.state.searchText) return <Redirect to={{ pathname: '/user-search', state: {searchText : this.state.searchText }}} />;
    const date = new Date(Date.now()).toDateString();

    return(
        <div className="container">
            <div className="logo">
                <img src="_assets/t-logo.png" alt=""/>
            </div>
            <div className="search-area">
                <div className="tweet">
                    <div className="tweet_avatar">
                        <img src="_assets/t-logo.png" alt=""/>
                    </div>
                    <div className="tweet__body">
                        <div className="tweet_body_header">
                            <span className="tweet__username">SearchForATweet</span>
                            <span className="tweet__handle">@SearchForATweet</span> &#8226;
                            <span className="tweet__date">{this.date}</span>
                        </div>
                        <div className="tweet_body_text">
                            <p>Use the Search box below to search for a tweet from someone you follow! You can search by <em>@twitter_handle</em> or <em>tweet content</em>.</p>
                            <Search placeHolder="@elonmusk or 'bananas" setSearchText={this.setSearchText} inputID="user-search"/>
                        </div>
                    </div>
                </div>
                <div className="tweet">
                    <div className="tweet_avatar">
                        <img src="_assets/t-logo.png" alt=""/>
                    </div>
                    <div className="tweet__body">
                        <div className="tweet_body_header">
                            <span className="tweet__username">GrabATweet</span>
                            <span className="tweet__handle">@grabATweet</span> &#8226;
                            <span className="tweet__date">{this.date}</span>
                        </div>
                        <div className="tweet_body_text">
                            <p>Use the Grab-A-Tweet box below to search for a tweet from someone we follow! <em>#InspirationLaughsSelfDevelopment</em></p>
                            <Button buttonText="Grab-A-Tweet" inputID="random-search"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;