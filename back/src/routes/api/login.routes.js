const express = require("express");
const router = express.Router();

const userController = require("../../Controllers/user.controller");

router.post("/login",  userController.login);
router.post("/register",  userController.register);
router.post("/edituser", userController.UserEdit);

module.exports = router;