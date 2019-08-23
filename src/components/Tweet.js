import React, { Component } from 'react'

class Tweet extends Component {
  render() {
    return (
      <div className="tweet">
        <div className="tweet_avatar">
          <img src="_assets/t-logo.png" alt=""/>
        </div>
        <div className="tweet__body">
          <div className="tweet_body_header">
            <span className="tweet__username">{this.props.username}</span>
            <span className="tweet__handle">{this.props.handle}</span>&#8226;
            <span className="tweet__date">{this.props.date}</span>
          </div>
          <div className="tweet_body_text">
            <p>{this.props.text}</p>
            {
              (this.props.inputElement === 'Button') ?
              <button type="button" id={this.props.inputID}>{this.props.inputText}</button> :
              <input type="text" id={this.props.inputID} placeholder={this.props.inputPlaceholder}/> 
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Tweet

