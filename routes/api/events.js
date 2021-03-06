const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/events"
router.route("/").get(eventsController.findAll);
router.route("/newEvent/")
.post(eventsController.createNewEvent)

module.exports = router;
