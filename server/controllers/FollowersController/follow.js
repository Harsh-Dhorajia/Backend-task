const { Follower, User } = require("../../models");
const { FOLLWER_ADDED } = require("../../constants/messages");

const follow = async (req, res) => {
  try {
    const { user_id } = req.body;

    // find user exist or not
    const isUserExists = await User.findByPk(user_id);
    if (!isUserExists) {
      return res.status(404).send({ message: "User does not exist" });
    }
    // create record in follower table
    await Follower.create({
      followed_id: req.user.id,
      follower_id: user_id,
    });

    return res.send({
      message: FOLLWER_ADDED,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("error", error);
    return res.send(error);
  }
};

module.exports = follow;
