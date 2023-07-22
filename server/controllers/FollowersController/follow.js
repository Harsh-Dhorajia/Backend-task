const { Follower } = require("../../models");
const { FOLLWER_ADDED } = require("../../constants/messages");

const follow = async (req, res) => {
  try {
    const { user_id } = req.body;

    const isUserExists = await User.findByPk(user_id);
    if (!isUserExists) {
      return res.status(404).send({ message: "User does not exist" });
    }
    await Follower.create({
      user_id: req.user.id,
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
