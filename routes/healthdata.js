var express = require('express');
var router = express.Router();
var HealthController = require("../controller/healthdata");
var UserController = require('../controller/user'); 

router.post('/AddHealthData', UserController.sequre,HealthController.AddHealthData);
router.get('/:id', UserController.sequre ,HealthController.ViewHealthData);
router.patch('/:id',UserController.sequre, HealthController.UpdateHealthData);
router.delete('/:id',UserController.sequre, HealthController.DeleteHealthData);

module.exports = router;
