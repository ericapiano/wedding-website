// Our newest addition to the dependency family
// var mongoose = require("mongoose");
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

var rsvpSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    // required: true,
    default: Date.now
  },
  status: {
    type: String,
    required: true
  },
  peopleCount: {
    type: Number,
    required: true
    // default: 0
  }
});

var RSVP = mongoose.model("RSVP", rsvpSchema);

module.exports = RSVP;
