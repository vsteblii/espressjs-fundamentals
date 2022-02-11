const express = require("express");
const throwRouter = express.Router();


throwRouter.get("/ok", function (req, res) {
    res.send("Throw - Success!!");
});

throwRouter.get("/1", function (req, res) {
    throw new Error('Throw - Wops! - 1');
});

throwRouter.use('/', function (req, res, next) {
    console.log("We throw an error in middleware!");
    // important just for async functions
    next(new Error('Throw - Wops in middleware'));
});

throwRouter.get("/2", function (req, res) {
    res.send("Throw - I could succeed but it is not my day.");
});



module.exports = throwRouter;
