const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    // console.log('get /api/events')
    
    db.EVENT
      .find(req.query)
      .sort({ date: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createNewEvent: function(req, res) {
    // console.log("creating new")
    // console.log(req.body)
    db.EVENT.create(req.body)
    .then(dbeventData => res.json(dbeventData))
    .catch(err => {
      console.log(err);
      res.status(422).json(err)
    });
  }
}