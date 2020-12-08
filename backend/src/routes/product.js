const express = require('express');
const { default: slugify } = require('slugify');
const { requiresignin, adminMiddleware } = require('../common-middleware');
// const { addCategory, getCategories } = require('../controller/category');
const { createProduct, getProduct } = require('../controller/product');
const router = express.Router();
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');
const Product = require('../models/product');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

const upload = multer({ storage });

router.post('/product/create', requiresignin, adminMiddleware,upload.array('productPicture'),createProduct);
//router.get('/category/getcategory',getCategories);
router.get('/products/:id', getProduct )

module.exports = router;