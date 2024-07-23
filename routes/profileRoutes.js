const express = require("express")
const router = express.Router();
const Profilehandler = require("../controller/profileController");


router.post('/login',Profilehandler.login)


module.exports = router;
