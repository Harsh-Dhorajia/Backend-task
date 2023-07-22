/* eslint-disable no-shadow */
const bcrypt = require('bcryptjs');
const { User } = require('../../models');
const {
  USER_REGISTER_SUCCESS,
  USER_ALREADY_EXISTS,
  SERVER_ERROR,
} = require('../../constants/messages');

const register = async (req, res) => {
  try {
    const { username, email } = req.body;
    let { password } = req.body;

    const userAlreadyExist = await User.findOne({ where: { email } });

    if (userAlreadyExist) {
      return res.status(400).json({ message: USER_ALREADY_EXISTS });
    }
    password = await bcrypt.hash(password, 12);
    const user = await User.create({
      username,
      email,
      password,
    });
    if (!user) {
      return res.send({
        message: SERVER_ERROR,
      });
    }
    return res.send({
      message: USER_REGISTER_SUCCESS,
      data: {
        user,
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error', error);
    return res.send(error);
  }
}
module.exports = register;
