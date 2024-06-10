const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   username : {
    type : String,
    required : true,
    unique : true
   },

   firstname : {
    type : String,
    required : true,
    unique : true
   },

   lastname : {
    type : String,
    required : true,
    unique : true
   },

   password : {
    type : String,
    required : true,
    unique : true
   }

});
let USER = mongoose.model('User',UserSchema);
module.exports = USER
