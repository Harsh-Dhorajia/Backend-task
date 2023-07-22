const express = require("express");
const { login, register, logout } = require("../../controllers/UserController");
const router = express.Router();
const userValidation = require("../../validators/users/user-validation");
const { authenticatedUser } = require("../../middleware/authenticatedUser");

router.post("/register", userValidation.register, register);

router.post("/login", userValidation.login, login);

router.patch("/logout", authenticatedUser, logout);

module.exports = router;
