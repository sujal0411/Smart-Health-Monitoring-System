let HEALTH = require("../model/healthdata");

exports.AddHealthData = async function(req, res, next) {
    try {       
        req.body.userID = req.userID 
        let Create = await HEALTH.create(req.body)
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

exports.ViewHealthData = async function(req, res, next) {
    try {        
        let View = await HEALTH.find({userID : req.userID}).populate("userID")
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

exports.UpdateHealthData = async function(req, res, next) {
    try {        
        let Update = await HEALTH.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({
            status: "success",
            message : "HealthData Updated successfully",
            data : Update
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message : error.message            
        })
    }
};

exports.DeleteHealthData = async function(req, res, next) {
    try {        
        let Delete = await HEALTH.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status: "success",
            message : "HealthData Deleted successfully",
            data : Delete
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message : error.message            
        })
    }
};