const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/events"
router.route("/")
  .post(eventsController.findAll)
  

module.exports = router;
