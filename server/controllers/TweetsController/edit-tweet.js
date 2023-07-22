/* eslint-disable no-shadow */
const { Tweet } = require("../../models");
const {
  TWEET_NOT_FOUND,
  PERMISSION_NOT_FOUND,
  TWEET_UPDATED,
} = require("../../constants/messages");

const updateTweet = async (req, res) => {
  const { message } = req.body;
  try {
    const { id } = req.user;

    // get given tweet
    const tweet = await Tweet.findByPk(req.params.tweetId);

    if (!tweet) {
      return res.json({
        message: TWEET_NOT_FOUND,
      });
    }
    // verify the valid user to update the tweet
    if (tweet.createdBy !== id) {
      return res.json({
        message: PERMISSION_NOT_FOUND,
      });
    }
    await tweet.update({
      message,
    });
    return res.json({ message: TWEET_UPDATED, data: tweet });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.json(error);
  }
};

module.exports = updateTweet;
