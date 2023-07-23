const { Follower } = require("../../models");
const { UNFOLLOW_USER } = require("../../constants/messages");

const unFollow = async (req, res) => {
  try {
    const { user_id } = req.body;


    const followExists = await Follower.findOne({
      where: {
        followed_id: req.user.id,
        follower_id: user_id
      }
    });
    if (!followExists) {
      return res.status(404).send({ message: "Follower does not exist" });
    }
    await Follower.destroy({
      where: {
        followed_id: req.user.id,
        follower_id: user_id,
      }
    });

    return res.send({
      message: UNFOLLOW_USER,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("error", error);
    return res.send(error);
  }
};

module.exports = unFollow;
