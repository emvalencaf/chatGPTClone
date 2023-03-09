const express = require("express");

// routers
const router = express();
const promptRouter = require("./prompt");

// prompt routes
router.use("/api/prompts", promptRouter);
router.get("/api", (req, res) => {
    res.send("api is working!!");
})

module.exports = router;