const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
    console.log("INDEX LOGGER 1");
    next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(function (req, res, next) {
    console.log("INDEX LOGGER 2");
    next();
});

module.exports = router;
