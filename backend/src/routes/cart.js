const express = require('express');
const { default: slugify } = require('slugify');
const { requiresignin, userMiddleware } = require('../common-middleware');
const { addItemToCart } = require('../controller/cart');
const router = express.Router();

router.post('/user/cart/addtocart', requiresignin, userMiddleware ,addItemToCart);

module.exports = router;