const express = require('express');
const {
    login,
    register,
    logout
  } = require('../../controllers/UserController');
const router = express.Router();
const userValidation = require('../../validators/users/user-validation')

router.post(
    '/register',
    userValidation.register,
    register
);

router.post(
    '/login',
    userValidation.login,
    login
);

router.patch(
    '/login',
    logout
);

module.exports = router;