/* eslint-disable no-shadow */
const { User } = require('../../models');
const { Tweet } = require('../../models');
const { TWEET_NOT_FOUND, TWEET_FETCHED } = require('../../constants/messages');

const getTweet = async (req, res) => {
    try {
      // Get Tweet by its id
      const tweet = await Tweet.findByPk(req.params.tweetId, {
        include: [
          { model: User, as: 'creator', attributes: ['username', 'email'] },
        ],
        attributes: ['message'],
      });
      if (!tweet) return res.json({ message: TWEET_NOT_FOUND });
    
      return res.json({ message: TWEET_FETCHED, data: tweet });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return res.json(error);
    }
}
module.exports = getTweet;