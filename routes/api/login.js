const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/events"
router.route("/")
  .get(loginController.findByUsername)
  

module.exports = router;
// .get((req, res)=>{
//   processData(req.body){}
//   loginController.findByUsername(req, res)
// })