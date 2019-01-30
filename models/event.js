// Our newest addition to the dependency family
var mongoose = require("mongoose");
// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  
  eventName: {
    type:String,
    required: true
  },
  date: {
  type: Date,
  required: true
  },
  locationName: {
    type:String,
    required: true
  },
  address:{
    type:String,
    // required: true
  }
})

var EVENT = mongoose.model("EVENT", eventSchema);
module.exports = EVENT;
  
  