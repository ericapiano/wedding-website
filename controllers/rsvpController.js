const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // also needs update method in case anyone needs to update their rsvp
  findAll: function(req, res) {
    db.RSVP.find(req.query)
      .sort({ date: -1 })
      .then(dbModel =>{ res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  updateStatus: function(req, res) {
    console.log("updatingstatus")
    db.RSVP.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbRsvpData => res.json(dbRsvpData))
    .catch(err => {
      console.log(err);
      res.status(422).json(err)
    });
  },
  updateCount: function(req, res) {
    console.log("updatingcount")
    db.RSVP.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbRsvpData => res.json(dbRsvpData))
    .catch(err => {
      console.log(err);
      res.status(422).json(err)
    });
  }
};
