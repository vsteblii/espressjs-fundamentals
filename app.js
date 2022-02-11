const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// ====================== Routers Setup
const throwRouter = require("./routes/throw");
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const userFriendsRouter = require("./routes/user_friends");

const app = express();



// // ====================== View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

const port = 3000;

// ====================== Global Middlewares Setup
// Logger
app.use(logger("dev"));
// Parse requests with JSON payloads
// ex. {id: 1, name: "Petro"}
app.use(express.json());
// It parses incoming requests with urlencoded payloads
// ex. 'petro%20is%20a%20person'
app.use(express.urlencoded({ extended: false }));
// Parse cookies
app.use(cookieParser());
// Our global Middleware
app.use(function (req, res, next) {
    console.log("GLOBAL LOGGER 1");
    next();
});

// ====================== Static Folders Setup
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public_second")));
app.use("/virtual", express.static(path.join(__dirname, "public")));

app.use("/user", usersRouter);
app.use("/throw", throwRouter);
app.use("/posts", postsRouter);
app.use("/userFriends", userFriendsRouter);

app.get("/", (req, res) => {
    res.send("Root - Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.use(function (req, res, next) {
    console.log("GLOBAL LOGGER 2");
    next();
});

app.get("/hello", (req, res) => {
    res.send("Root - Hello World!");
});

// ====================== Global Error Handlers
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    // If we got here, we don't have other routes that fits request url
    next(createError(404));
});

// Error handler (has 4 params instead of 3)
// if we skip it, express will use default error handler
app.use(function (err, req, res, next) {
    console.log('Woops, looks like that we have a global issue.');
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
