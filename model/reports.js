const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    Message : {
        type : String,
        required : true
    },
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
     }
    
   
   
});
let REPORT = mongoose.model('Report',ReportSchema);
module.exports = REPORT