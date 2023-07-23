const express = require("express");
const { login, register, logout } = require("../../controllers/UserController");
const router = express.Router();
const userValidation = require("../../validators/users/user-validation");
const { authenticatedUser } = require("../../middleware/authenticatedUser");

// route to Register a user
router.post("/register", userValidation.register, register);

// route to Login a user
router.post("/login", userValidation.login, login);

// route to logout a user
router.patch("/logout", authenticatedUser, logout);

module.exports = router;
