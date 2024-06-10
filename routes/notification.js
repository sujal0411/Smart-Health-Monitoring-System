var express = require('express');
var router = express.Router();
var NtfcnController = require("../controller/notification");
var UserController = require('../controller/user'); 

router.post('/AddNotification', UserController.sequre,NtfcnController.AddNotification);
router.get('/', UserController.sequre,NtfcnController.ViewNotification);

module.exports = router;
