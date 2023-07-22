const postTweet = require("./post-tweet");
const updateTweet = require("./edit-tweet");
const getTweet = require("./get-tweet");
const deleteTweet = require("./delete-tweet");
const tweetsFeed = require("./feed-tweets");

module.exports = {
  postTweet,
  updateTweet,
  getTweet,
  deleteTweet,
  tweetsFeed
};
