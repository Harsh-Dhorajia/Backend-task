const jwt = require('jsonwebtoken');
const { TOKEN_REQUIRED, INVALID_TOKEN } = require('../constants/messages');
const { jwtSecretKey } = require('../config/config');

module.exports.authenticatedUser = (req, res, next) => {
  // get authorization Header
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    return res.json({
      message: TOKEN_REQUIRED,
    });
  }
  // Get auth token by splitting with Bearer
  const token = authorizationHeader.split('Bearer ')[1];
  const options = {
    expiresIn: '2d',
  };

  try {
    // Verify auth token with secret key and options
    const user = jwt.verify(token, jwtSecretKey, options);
    req.user = user;
    return next();
  } catch (error) {
    return res.json({
      message: INVALID_TOKEN,
    });
  }
};
