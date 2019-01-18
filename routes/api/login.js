const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/events"
router.route("/:userName")
  .post(loginController.findByUsername)
  

module.exports = router;
