import React, { Component, Fragment } from 'react';
import Tweet from '../Tweet';

class UserSearch extends Component {

  state = {
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
        },
        {
            username: "pjhyett",
            handle: "pjhyett",
            id: 6,
            avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
            text: "some text",
            date: '12 June 2019'
        },
        {
            username: "pjhyett",
            handle: "pjhyett",
            id: 7,
            avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
            text: "some text",
            date: '12 June 2019'
        },
        {
            username: "pjhyett",
            handle: "pjhyett",
            id: 8,
            avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
            text: "some text",
            date: '12 June 2019'
        },
        {
            username: "pjhyett",
            handle: "pjhyett",
            id: 9,
            avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
            text: "some text",
            date: '12 June 2019'
        },
        {
            username: "pjhyett",
            handle: "pjhyett",
            id: 10,
            avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
            text: "some text",
            date: '12 June 2019'
        },
    ],
    searchText: null,
  }

  componentDidMount() {
    if (this.props.location.state && this.state.searchText === null)
    {
      this.setState({ searchText: this.props.location.state.searchText});
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

export default UserSearch
