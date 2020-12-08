const express = require('express');
const { userMiddleware } = require('../common-middleware');
const { signoutuser } = require('../controller/admin/auth');
const router = express.Router();
const { signup,signin } = require("../controller/auth");
const { validateSignUpRequest , validateSignInRequest , isRequestValidated } = require('../validators/auth');
 
router.post('/signin', validateSignInRequest , isRequestValidated , signin);

router.post('/signup', validateSignUpRequest, isRequestValidated , signup);

router.post('/signout' , signoutuser)

module.exports = router;