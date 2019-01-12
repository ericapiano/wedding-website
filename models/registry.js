// Our newest addition to the dependency family
var mongoose = require("mongoose");
// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

var registrySchema = new Schema({
  
  storeName: {
    type:String,
    required: true
  },
  text: {
  type: String,
  required: true
  },
  link: {
    type:String,
    required: true
  }
})

var REGISTRY = mongoose.model("REGISTRY", registrySchema);
module.exports = REGISTRY;
  
  