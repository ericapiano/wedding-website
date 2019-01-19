// import registry model
const db = require("../models");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
var userCurrent
var passCurrent
// export set of methods
module.exports = {

  findByUsername: function (req, res) {
    console.log(req.body.userName)
     userCurrent = req.body.userName;
     passCurrent = req.body.password;
     pt(userCurrent, passCurrent)
  },
//   pt: function( userCurrent, passCurrent){passport.use(new LocalStrategy(
//     {
//       username: userCurrent,
//     },
//     function (userName, password, done) {
//       // When a user tries to sign in this code runs
//       db.LOGIN.findOne({
//           userName: userName
//       }), function (dbUser) {
//         console.log(dbUser,"here")
//         // If there's no user with the given username
//         if (!dbUser) {
//           return done(null, false, {
//             message: "Incorrect username."
//           });
//         }
//         // If there is a user with the given email, but the password the user gives us is incorrect
//         else if (!dbUser.validPassword(password)) {
//           return done(null, false, {
//             message: "Incorrect password."
//           });
//         }
//         // If none of the above, return the user
//         return done(null, dbUser);
//       };
//     }
//   ));
  
//   // In order to help keep authentication state across HTTP requests,
//   // Sequelize needs to serialize and deserialize the user
//   // Just consider this part boilerplate needed to make it all work
//   passport.serializeUser(function (user, cb) {
//     cb(null, user);
//   });
  
//   passport.deserializeUser(function (obj, cb) {
//     cb(null, obj);
//   });
  
//   // Exporting our configured passport
// }
 
}