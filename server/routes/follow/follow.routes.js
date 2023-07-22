const express = require("express");
const { follow, unFollow } = require("../../controllers/FollowersController");
const router = express.Router();
const followerValidator = require("../../validators/follows/follows-validation");
const { authenticatedUser } = require("../../middleware/authenticatedUser");

router.post("/follow", authenticatedUser, followerValidator.follow, follow);

router.delete("/unfollow", authenticatedUser, unFollow);

module.exports = router;
