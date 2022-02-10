const express = require("express");
const userFriendsRouter = express.Router();

/* GET users listing. */
userFriendsRouter.get("/", function (req, res, next) {
    res.send("Got a FRIENDS GET in USER_FRIENDS routes");
});

userFriendsRouter.post("/", function (req, res) {
    res.send("Got a POST request");
});

userFriendsRouter.put("/", function (req, res) {
    res.send("Got a PUT request");
});

userFriendsRouter.patch("/", function (req, res) {
    res.send("Got a PATCH request");
});

userFriendsRouter.delete("/", function (req, res) {
    res.send("Got a DELETE request");
});

module.exports = userFriendsRouter;
