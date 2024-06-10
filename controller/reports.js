let REPORT = require("../model/reports")

exports.GenerateHealthReport = async function(req, res, next) {
    try {       
        req.body.userID = req.userID 
        let Create = await REPORT.create(req.body)
        res.status(201).json({
            status: "success",
            message : "HealthData Created successfully",
            data : Create
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message : error.message            
        })
    }
};

exports.ViewHistoricalReports = async function(req, res, next) {
    try {        
        let View = await REPORT.find({userID : req.userID}).populate("userID")
        res.status(201).json({
            status: "success",
            message : "HealthData Viewed successfully",
            data : View
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message : error.message            
        })
    }
};

