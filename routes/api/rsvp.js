const router = require("express").Router();
const rsvpController = require("../../controllers/rsvpController");

// Matches with "/api/books"
router.route("/")
.get(rsvpController.findAll)

router.route("/:id")
.put(rsvpController.updateStatus)
.put(rsvpController.updateCount)

  

module.exports = router;
