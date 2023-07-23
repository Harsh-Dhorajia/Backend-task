const express = require("express");
const { follow, unFollow } = require("../../controllers/FollowersController");
const router = express.Router();
const followerValidator = require("../../validators/follows/follows-validation");
const { authenticatedUser } = require("../../middleware/authenticatedUser");

// route for follow any user
router.post("/follow", authenticatedUser, followerValidator.follow, follow);

// route for un follow any user
router.delete("/unfollow", authenticatedUser, unFollow);

module.exports = router;
