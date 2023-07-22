const express = require('express');
const {
    login,
    register,
  } = require('../../controllers/UserController');
const router = express.Router();
const userValidation = require('../../validators/users/user-validation')
router.post( //demo API using post method so we can pass data in body
    '/register',
    // redisMiddleware.redisAuthForAdmin,
    userValidation.register,
    register
);

module.exports = router;