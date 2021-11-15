const express = require('express');
const indexController = require('../controllers/indexController');
const router = express.Router();

router.get("/", indexController.renderIndex);

module.exports = router