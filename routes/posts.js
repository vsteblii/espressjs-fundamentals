const express = require("express");
const postsRouter = express.Router();

postsRouter.use('/', function (req, res, next) {
    console.log("POSTS GLOBAL LOGGER 1");
    next();
});

function localLogger (req, res, next) {
    console.log("Local user logger 1");
    next();
}

postsRouter.get("/",localLogger,localLogger,localLogger, function (req, res, next) {
    res.send("Posts - Got a GET request");
});

postsRouter.use('/', function (req, res, next) {
    console.log("POSTS GLOBAL LOGGER 1");
    next();
});



module.exports = postsRouter;
