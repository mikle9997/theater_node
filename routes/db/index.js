const news = require('./news');
const actors = require('./actors');
const media = require('./media');
const users = require('./users');
const newsMedia = require('./news-has-media');

// All requsets return promise
module.exports = {
    news,
    actors,
    media,
    users,
    newsMedia
};
