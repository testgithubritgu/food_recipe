const express = require('express');
const { userSignup, userlogin, getUser } = require('../components/controllers_recipe/user');
const router = express.Router();

router.post('/signUp',userSignup)
router.post('/login',userlogin)
router.get('/user/:id',getUser)


module.exports = router