const express = require("express");
const indexController = require("../controllers/indexController");
const router = express.Router();

router.get("/", indexController.renderIndex);

router.post("/theme", indexController.saveTheme);

router.get("/logout", indexController.logout);

module.exports = router;
