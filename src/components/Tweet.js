import React, { Fragment } from 'react'

function Tweet() {
    return (
        <div className="tweet">
            <div className="tweet_avatar">
                <img src="_assets/t-logo.png" alt=""/>
            </div>
            <div className="tweet__body">
                <div className="tweet_body_header">
                    <span className="tweet__username">DummyText</span>
                    <span className="tweet__handle">@dummyText</span> &#8226;
                    <span className="tweet__date">date</span>
                </div>
                <div className="tweet_body_text">
                    <p>Use the Search box below to search for a tweet from someone you follow!.</p>
                </div>
            </div>
        </div>
    )
}

export default Tweet;
