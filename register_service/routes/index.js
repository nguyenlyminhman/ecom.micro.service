var express = require('express');
var router = express.Router();
let user = require("../controller/UserController");

/* GET users listing. */
router.post('/get-all', user.getAll);
router.post('/regis', user.createOne);

module.exports = router;