var express = require('express');
var router = express.Router();
let auth = require('../controller/AuthController');

/* GET home page. */
router.post('/auth', auth.login);

module.exports = router;
