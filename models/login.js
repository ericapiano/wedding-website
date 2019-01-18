// Our newest addition to the dependency family
var mongoose = require("mongoose");
// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

var loginSchema = new Schema({
  
  userName: {
    type:String,
    required: true
  },
  password: {
    type:String,
    required: true
  }
})

var LOGIN = mongoose.model("LOGIN", loginSchema);
module.exports = LOGIN;
  
  