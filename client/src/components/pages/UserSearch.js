import React, { Component, Fragment } from 'react';
import Tweet from '../Tweet';

class UserSearch extends Component {

  state = {
    searchText: '',
    tweets: []
  }

  componentDidMount() {
    console.log(this.props);
    
  }

  onSubmit = (e) => {
    e.preventDefault();
    fetch('api/tweets')
    .then((res)=> res.json())
    .then((data) => {
      console.log(data);
    })
    console.log('This has been submitted ', this.state.searchText);
  }

  onChange = (e) => {
    this.setState({ searchText: e.target.value});
    console.log(this.state.searchText);
  }
  
  render() {
    return (
      <Fragment>
        <div className="top-content">
       <div className="header">
        <div className="title-bar">
          <form onSubmit={this.onSubmit}>
            <input 
              type="text" 
              id='user-search' 
              name='searchText'
              placeholder='Elon Musk' 
              onChange={this.onChange}
              value={this.state.searchText}
            />
          <input type="submit" name="" id="" hidden/>
        </form> 
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
