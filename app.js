const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");




// ====================== Routers Setup
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();




// ====================== View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");




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




// ====================== Init Routers
app.use("/", indexRouter);
app.get('/file.txt', function (req, res) {
    res.render('index', { title: 'TXT file' });
});
// Our global Middleware 2
app.use(function (req, res, next) {
    console.log("GLOBAL LOGGER 2 - after index routes");
    next();
});
app.use("/users", usersRouter);




// ====================== Global Error Handlers
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    // If we got here, we don't have other routes that fits request url
    next(createError(404));
});

// Error handler (has 4 params instead of 3)
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
