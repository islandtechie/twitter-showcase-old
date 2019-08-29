const express = require('express');
const server = express();

const port = 3001

server.get('/api/getTweets', (req, res) => {
    res.send('hey');
});

server.listen(port, () => console.log('server running'));

const tweets = [
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