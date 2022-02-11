const express = require("express");
const usersRouter = express.Router();

usersRouter.use('/', function (req, res, next) {
    console.log("USERS LOGGER 1");
    next();
});

/* GET users listing. */
usersRouter.get("/", function (req, res) {
    res.render('index', {title: "Users - Got a GET request"});
});

usersRouter.get("/friends", function (req, res) {
    res.send("Users - Got a FRIENDS GET in USERS routes");
});

usersRouter.get("/:userId/friends/:friendId", function (req, res) {
    res.send(req.params);
});

usersRouter.post("/", function (req, res) {
    res.send("Got a POST request");
});

usersRouter.put("/", function (req, res) {
    res.send("Got a PUT request");
});

usersRouter.patch("/", function (req, res) {
    res.send("Got a PATCH request");
});

usersRouter.delete("/", function (req, res) {
    res.send("Got a DELETE request");
});

module.exports = usersRouter;
