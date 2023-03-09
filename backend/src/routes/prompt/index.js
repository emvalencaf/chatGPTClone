const express = require("express");

// controller
const promptController = require("../../controllers/prompt");

// router
const router = express.Router();

// routes
router.post("/", promptController.sendText);


module.exports = router;