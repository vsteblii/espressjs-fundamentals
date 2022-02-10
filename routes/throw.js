const express = require("express");
const throwRouter = express.Router();


throwRouter.get("/ok", function (req, res, next) {
    res.send("Success!!");
});

throwRouter.get("/1", function (req, res, next) {
    throw new Error('Wops! - 1');
});

throwRouter.use('/', function (req, res, next) {
    console.log("We throw an error in middleware!");
    // important just for async functions
    next(new Error('Wops in middleware'));
});

throwRouter.get("/2", function (req, res, next) {
    res.send("I could succeed but it is not my day.");
});



module.exports = throwRouter;
