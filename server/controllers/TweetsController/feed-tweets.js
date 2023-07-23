/* eslint-disable no-shadow */
const { Tweet, Follower } = require("../../models");
const { TWEET_NOT_FOUND, TWEET_FETCHED } = require("../../constants/messages");
const { Op } = require("sequelize");

const getTweet = async (req, res) => {
  try {
    // Get all follwer of loggedin user
    let users = await Follower.findAll({
      where: { follower_id: req.user.id },
      attributes: ["followed_id"],
    });
    let userIds = users.map((user) => user.followed_id);
    userIds.push(req.user.id);
    // fetch all tweets created by their followers
    const tweets = await Tweet.findAll({
      where: {
        createdBy: { [Op.in]: userIds },
      },
      raw: true,
    });
    if (!tweets.length) return res.json({ message: TWEET_NOT_FOUND });

    return res.json({ message: TWEET_FETCHED, data: tweets });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.json(error);
  }
};

module.exports = getTweet;
