const { Tweet } = require("../../models");
const { TWEET_ADDED } = require("../../constants/messages");

const register = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || !message.length) {
      return res.status(400).send({ message: "Please enter a Tweet message" });
    }

    const createdTweet = await Tweet.create({
      message,
      user_id: req.user.id,
    });
    return res.send({
      message: TWEET_ADDED,
      data: createdTweet,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("error", error);
    return res.send(error);
  }
};
module.exports = register;
