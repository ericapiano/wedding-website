const db = require("../models");
const nodemailer = require("nodemailer");
const smtpTransport = require(`nodemailer-smtp-transport`);

// Defining methods for the booksController
module.exports = {
  // also needs update method in case anyone needs to update their rsvp
  findAll: function(req, res) {
    db.RSVP.find(req.query)
      .sort({ date: -1 })
      .then(dbModel =>{ res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  updateStatus: function(req, res) {
    // console.log(sendMail)
    sendMail(req.body)
    // console.log("updatingstatus")
    // console.log(req.body)
    db.RSVP.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbRsvpData => res.json(dbRsvpData))
    .catch(err => {
      console.log(err);
      res.status(422).json(err)
    });
  },
  updateCount: function(req, res) {
    // console.log("updatingcount")
    sendMail(req.body)
    db.RSVP.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbRsvpData => res.json(dbRsvpData))
    .catch(err => {
      console.log(err);
      res.status(422).json(err)
    });
  },
  createNewGuest: function(req, res) {
    // console.log("creating new")
    // console.log(req.body)
    db.RSVP.create(req.body)
    .then(dbRsvpData => res.json(dbRsvpData))
    .catch(err => {
      console.log(err);
      res.status(422).json(err)
    });
  }
};



function sendMail(body){

  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAILPASS
    }
  }))
 
  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Wedding Website 👻" <WedWeb1234@gmail.com>', // sender address
    to: "dhanashreevphalak.24@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: 'hi', // plain text body
    html: body.firstName+body.lastName+" RSVPd as "+ body.status+ " for "+ body.peopleCount +" members"  // html body
  };

  transporter.sendMail(mailOptions, (err, info) => {

    if(err){
      console.log(err)
    }else {
      console.log('Email Send' + info.response)
    }
  })
}