const router = require("express").Router();
const rsvpController = require("../../controllers/rsvpController");

// Matches with "/api/books"
router.route("/")
.get(rsvpController.findAll)
.post(rsvpController.create);
  

module.exports = router;
