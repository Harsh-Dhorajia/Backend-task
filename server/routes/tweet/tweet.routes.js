const express = require("express");
const {
  postTweet,
  updateTweet,
  getTweet,
} = require("../../controllers/TweetsController");
const router = express.Router();
const tweetValidation = require("../../validators/tweets/tweets-validation");
const { authenticatedUser } = require("../../middleware/authenticatedUser");
router.post(
  "/post-tweet",
  authenticatedUser,
  tweetValidation.postTweet,
  postTweet
);

router.put(
  "/edit-tweet/:tweetId",
  authenticatedUser,
  tweetValidation.updateTweet,
  updateTweet
);

router.put("/get-tweet/:tweetId", authenticatedUser, getTweet);

module.exports = router;
