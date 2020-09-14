const express = require("express");
const router = express.Router();

// requires
    const login = require("./api/login.routes");
    const menu = require("./api/menu.routes");
    const email = require("./api/email.route");

//routes
    router.use("/", login);
    router.use("/home", menu);
    router.use("/email", email);

module.exports = router;