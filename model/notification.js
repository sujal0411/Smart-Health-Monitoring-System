const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
   Date : {
      type : String,
      required : true
   },
   Message : {
      type : String,
      required : true
   },
   RecommendendActions : {
      type : String,
      required : true
   },
   HealthTips : {
      type : String,
      required : true
   },
   NextChekup : {
      type : String,
      required : true
   },
   userID : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   }

});
let NTFCN = mongoose.model('Ntfcn',NotificationSchema);
module.exports = NTFCN
