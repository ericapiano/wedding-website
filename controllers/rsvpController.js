const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // also needs update method in case anyone needs to update their rsvp
  findAll: function(req, res) {
    db.RSVP
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.RSVP
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
}