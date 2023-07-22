const express = require("express");
const {
  postTweet,
  updateTweet,
  getTweet,
  deleteTweet
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
  tweetValidation.editTweet,
  updateTweet
);

router.get("/get-tweet/:tweetId", authenticatedUser, getTweet);

router.delete(
  "/delete-tweet/:tweetId",
  authenticatedUser,
  deleteTweet
);
module.exports = router;
