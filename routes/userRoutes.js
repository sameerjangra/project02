const express = require("express");
const router =express.Router();
const Userhandler = require("../controller/userController")


router.post('/register',Userhandler.register)
router.get('/findallusers',Userhandler.findallusers)

module.exports = router;