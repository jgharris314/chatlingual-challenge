const router = require("express").Router();
const controller = require("./viewFiles.controller");

router.route("/addFile").post(controller.addFile).put(controller.transferFile);

router.route("/").post(controller.listFiles);

module.exports = router;
