let NTFCN = require("../model/notification");

exports.AddNotification = async function(req, res, next) {
    try {  
        req.body.userID = req.userID;      
        let Create = await NTFCN.create(req.body)
        res.status(201).json({
            status: "success",
            message : "Notification Added successfully",
            data : Create
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message : error.message            
        })
    }
};

exports.ViewNotification = async function(req, res, next) {
    try {        
        let View = await NTFCN.find({userID : req.userID}).populate("userID");
        res.status(201).json({
            status: "success",
            message : "Notification Viwed successfully",
            data : View
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message : error.message            
        })
    }
};