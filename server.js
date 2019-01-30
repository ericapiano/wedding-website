// import dependencies
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const routes = require("./routes");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");
const app = express();
const path = require("path");
const LocalStrategy = require("passport-local").Strategy;
const stripe = require('stripe')('sk_test_qOY8OS6iqUFldbzIJZHy9zbN');
const PORT = process.env.PORT || 3001; //has to be 3001 as react app uses 3000

require('dotenv').config();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
// Add routes, both API and view
app.use(routes);

const User = require("./models/user");

// const charge = await stripe.charges.create({
//   amount: 2000,
//   currency: 'usd',
//   source: 'tok_mastercard',
//   description: 'My first payment'
// });

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// wildcard route
// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login' }));
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/weeee",
  { useNewUrlParser: true }
);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
