const express = require("express");
const {
  postTweet,
  updateTweet,
  getTweet,
  deleteTweet,
  tweetsFeed
} = require("../../controllers/TweetsController");
const router = express.Router();
const tweetValidation = require("../../validators/tweets/tweets-validation");
const { authenticatedUser } = require("../../middleware/authenticatedUser");

// route for post Tweet 
router.post(
  "/post-tweet",
  authenticatedUser,
  tweetValidation.postTweet,
  postTweet
);

// route for edit Tweet 
router.put(
  "/edit-tweet/:tweetId",
  authenticatedUser,
  tweetValidation.editTweet,
  updateTweet
);

// route to get tweet
router.get("/get-tweet/:tweetId", authenticatedUser, getTweet);

// route to delete tweet
router.delete(
  "/delete-tweet/:tweetId",
  authenticatedUser,
  deleteTweet
);

// route to fetch tweet feeds
router.get("/tweet-feeds", authenticatedUser, tweetsFeed);

module.exports = router;
