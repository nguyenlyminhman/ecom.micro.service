var express = require('express');
var router = express.Router();
let product = require("../controller/ProductController");
let { isAuthenticated } = require("../middle_ware/authentication")

/* API product listing... */
router.post('/get-all', isAuthenticated, product.getAll);
router.post('/create', isAuthenticated, product.createOne);
router.post('/find-one', isAuthenticated, product.findById);
router.post('/buy', isAuthenticated, product.buyProduct);

module.exports = router;