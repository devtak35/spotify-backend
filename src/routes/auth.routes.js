const express = require('express');
const authController = require("../controllers/auth.control")
const router = express.Router();

router.post('/register',authController.registerUser) // user register krega uski api
router.post('/login',authController.loginUser) // user register krega uski api

module.exports = router;
