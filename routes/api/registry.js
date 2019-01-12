const router = require("express").Router();
const registryController = require("../../controllers/registryController");

// Matches with "/api/events"
router.route("/")
  .get(registryController.findAll)
  

module.exports = router;
