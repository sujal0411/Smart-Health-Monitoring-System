const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HealthSchema = new Schema({  
   Age : {
    type : String,
    required : true     
   },  

   BPM : {
    type : String,
    required : true
   },

   Temperature : {
    type : String,
    required : true     
   },

   MobileNo : {
    type : String,
    required : true     
   },

   userID : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   }


});
let HEALTH = mongoose.model('Health',HealthSchema);
module.exports = HEALTH
