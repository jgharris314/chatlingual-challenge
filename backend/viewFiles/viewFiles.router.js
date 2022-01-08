const router = require("express").Router();
const controller = require("./viewFiles.controller");

router.route("/").post(controller.listFiles);

module.exports = router;
