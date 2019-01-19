const router = require("express").Router();
const passport = require("passport");
const loginController = require("../../controllers/loginController");

// Matches with "/api/events"
router.route("/")
  .post(loginController.findByUsername)
  
  // .post('/api/login',
  // passport.authenticate('local'),
  // function (req, res) {
  //   console.log("redirecting to guestlist");
  //   // res.json("/api/guestList");
  // }
// );

module.exports = router;
// .get((req, res)=>{
//   processData(req.body){}
//   loginController.findByUsername(req, res)
// })