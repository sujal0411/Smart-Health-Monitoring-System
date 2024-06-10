var express = require('express');
var router = express.Router();
var UserController = require('../controller/user')

router.post('/Register', UserController.Register);
router.post('/Login', UserController.Login);
router.patch('/:id', UserController.sequre,UserController.UpdateUser);

module.exports = router;
