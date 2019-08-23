import React, { Component } from 'react'

class Tweet extends Component {
  state = {
    searchText: ''
  };

  onClick = (e) => {
    alert('events works');
  }

  onChange = (e) => {
    this.setState({ searchText: e.target.value});
  };

  
  render() {
    const date = new Date(Date.now()).toDateString();
    
    return (
      <div className="tweet">
        <div className="tweet_avatar">
          <img src="_assets/t-logo.png" alt=""/>
        </div>
        <div className="tweet__body">
          <div className="tweet_body_header">
            <span className="tweet__username">{this.props.username}</span>
            <span className="tweet__handle">{this.props.handle}</span>&#8226;
            <span className="tweet__date">{date}</span>
          </div>
          <div className="tweet_body_text">
            <p>{this.props.text}</p>
            {
              (this.props.inputElement === 'Button') ?
              <button type="button" id={this.props.inputID} onClick={this.onClick}>{this.props.inputText}</button> :
              <input type="text" id={this.props.inputID} placeholder={this.props.inputPlaceholder} value={this.state.searchText} onChange={this.onChange}/> 
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Tweet

