/* eslint-disable no-shadow */
const { User } = require("../../models");
const { LOGOUT_SUCCESS, INVALID_TOKEN } = require("../../constants/messages");

const logout = async (req, res) => {
  try {
    const authToken = req.header.authorization.split("Bearer ")[0];

    if (!authToken) {
        return res.status(401).send({ messgae: INVALID_TOKEN })
    }
    await User.update({ authToken: null }, { where: { authToken } });

    return res.status(200).json({ message: LOGOUT_SUCCESS });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("error", error);
    return res.send(error);
  }
};

module.exports = logout;
