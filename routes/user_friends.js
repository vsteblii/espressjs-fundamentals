const express = require("express");
const userFriendsRouter = express.Router();

/* GET users listing. */
userFriendsRouter.get("/", function (req, res) {
    res.send("UserFriends - Got a FRIENDS GET in USER_FRIENDS routes");
});

userFriendsRouter.post("/", function (req, res) {
    res.send("UserFriends - Got a POST request");
});

userFriendsRouter.put("/", function (req, res) {
    res.send("UserFriends - Got a PUT request");
});

userFriendsRouter.patch("/", function (req, res) {
    res.send("UserFriends -  Got a PATCH request");
});

userFriendsRouter.delete("/", function (req, res) {
    res.send("UserFriends - Got a DELETE request");
});

module.exports = userFriendsRouter;
