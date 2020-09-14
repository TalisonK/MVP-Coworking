//Required Modules
const express = require("express");
const router = express.Router();

//Required methods
const menuController = require("../../Controllers/menu.controller");
const mettingControllers = require("../../Controllers/metting.controller");

const authMiddleware = require("../../middlewares/auth.middlewares");

router.use(authMiddleware);

router.get("/auth", menuController.teste);

router.post("/addmetting", mettingControllers.addMetting);
router.post("/removemetting", mettingControllers.removeMetting);


module.exports = router;