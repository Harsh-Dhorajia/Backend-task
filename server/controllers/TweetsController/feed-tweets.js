/* eslint-disable no-shadow */
const { User } = require("../../models");
const { Tweet } = require("../../models");
const { TWEET_NOT_FOUND, TWEET_FETCHED } = require("../../constants/messages");
const { Op } = require("sequelize");

const getTweet = async (req, res) => {
  try {
    // Get event detail with their invited users
    let users = await Follower.findAll({
      where: { follower_id: req.user.id },
      attributes: ["followed_id"],
    });
    let userIds = users.map((user) => user.followed_id);
    userIds.push(req.user.id);
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
