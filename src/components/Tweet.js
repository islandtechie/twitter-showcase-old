import React, { Component } from 'react';

class Tweet extends Component {
    

    render() {
        const { username, avatar_url, handle, date, text } = this.props.tweet;
        return (
            <div className="tweet">
                <div className="tweet_avatar">
                    <img src={avatar_url} alt=""/>
                </div>
                <div className="tweet__body">
                    <div className="tweet_body_header">
                        <span className="tweet__username">{username}</span>
                        <span className="tweet__handle">{handle}</span> &#8226;
                        <span className="tweet__date">{date}</span>
                    </div>
                    <div className="tweet_body_text">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tweet;
