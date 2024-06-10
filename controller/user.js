var USER = require('../model/user')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.sequre = async function(req, res, next) {
    try {
        let token = req.headers.authorization
        if (!token) {
            throw new Error("please attach a token")            
        }
        let decoded = jwt.verify(token,"DEMO")
        req.userID = decoded.id
        let userCheck = await USER.findById(decoded.id)
        if(!userCheck){
            throw new Error("invalid token")
        }
        next();
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message : error.message            
        })
    }
};

exports.Register = async function(req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10);
        let Create = await USER.create(req.body)
        res.status(201).json({
            status: "success",
            message : "User Registered successfully",
            data : Create
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message : error.message            
        })
    }
};

exports.Login = async function(req, res, next) {
    try {
        let Check = await USER.findOne({username : req.body.username})
        if (!Check) {
            throw new Error("User not found")            
        }
        let passverify = await bcrypt.compare(req.body.password, Check.password)

        var token = jwt.sign({ id : Check._id },"DEMO");

        if (!passverify) {
            throw new Error("Password invalid")             
        }
        res.status(200).json({
            status: "success",
            message : "User Login successfully",
            data : Check,
            token
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message : error.message            
        })
    }
};

exports.UpdateUser = async function(req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10);
        let Update = await USER.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({
            status: "success",
            message : "User Login successfully",
            data : Update
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message : error.message            
        })
    }
};