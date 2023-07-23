/* eslint-disable no-shadow */
const { Tweet } = require("../../models");
const { TWEET_NOT_FOUND, TWEET_DELETED } = require("../../constants/messages");

const deleteTweet = async (req, res) => {
  try {
    // tweet exists for selected
    const isTweetExists = await Tweet.findByPk(req.params.tweetId);

    if (!isTweetExists) return res.json({ message: TWEET_NOT_FOUND });
    // check if user has access to delete tweet
    if (isTweetExists.createdBy !== req.user.id) {
      return res.json({
        message: PERMISSION_NOT_FOUND,
      });
    }
    // delete tweet from tweet table
    await Tweet.destroy({
      where: { id: req.params.tweetId },
    });
    return res.json({ message: TWEET_DELETED });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.json(error);
  }
};
module.exports = deleteTweet;
