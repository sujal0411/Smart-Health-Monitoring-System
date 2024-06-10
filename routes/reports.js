var express = require('express');
var router = express.Router();
var routerContoller = require("../controller/reports");
var userContoller = require("../controller/user")

/* GET users listing. */
router.post('/GenerateHealthReport', userContoller.sequre,routerContoller.GenerateHealthReport);
router.get('/', userContoller.sequre,routerContoller.ViewHistoricalReports);



module.exports = router;
