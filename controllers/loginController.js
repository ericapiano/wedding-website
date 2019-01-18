// import registry model
const db = require("../models");

// export set of methods
module.exports = {

  findByUsername: function (req, res) {
    db.LOGIN
      .findById(req.body.id)
      .then(credData => res.json(credData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
 
}