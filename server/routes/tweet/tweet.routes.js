const express = require("express");
const { postTweet } = require("../../controllers/TweetsController");
const router = express.Router();
const tweetValidation = require("../../validators/tweets/tweets-validation");
const { authenticatedUser } = require("../../middleware/authenticatedUser");
router.post(
  "/post-tweet",
  authenticatedUser,
  tweetValidation.postTweet,
  postTweet
);

module.exports = router;
