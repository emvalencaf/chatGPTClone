// modules
const express = require("express");
const cors = require("cors");

// configs
require("dotenv").config();

const app = express();

// middleware
    //config JSON
app.use(express.json());
    //config FormData
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    credentials: true,
    origin: `${process.env.FRONTEND_URL}`
}));

// router
const router = require("./routes");

// routes
app.use(router);
app.get("/", (req, res) => {
    res.send("API made in EXPRESS + NodeJS")
})
module.exports = app;
