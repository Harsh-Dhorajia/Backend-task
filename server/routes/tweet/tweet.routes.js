const express = require("express");
const { postTweet, updateTweet } = require("../../controllers/TweetsController");
const router = express.Router();
const tweetValidation = require("../../validators/tweets/tweets-validation");
const { authenticatedUser } = require("../../middleware/authenticatedUser");
router.post(
  "/post-tweet",
  authenticatedUser,
  tweetValidation.postTweet,
  postTweet
);

router.post(
  "/edit-tweet/:tweetId",
  authenticatedUser,
  tweetValidation.
  updateTweet
);

module.exports = router;
