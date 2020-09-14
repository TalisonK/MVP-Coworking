//Required Modules
const express = require("express");
const router = express.Router();

//Required methods
const emailController = require('../../Controllers/email.controller');
const { route } = require("./menu.routes");

//Routes
router.post("/resend", emailController.resendConfirmation );
router.post("/authenticate", emailController.authenticateEmail );
router.post("/confirmed", emailController.checkEmail);
router.post("/validation", emailController.validation);


module.exports= router;
