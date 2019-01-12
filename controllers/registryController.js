// import registry model
const db = require("../models");

// export set of methods
module.exports = {
  // find all registry(/api/registry)
  findAll: function(req, res){
    db.REGISTRY
    .find(req.query)
    .sort({date: -1})
    .then(dbRegistryData => res.json(dbRegistryData))
    .catch(err => res.status(422).json(err));
  }
}