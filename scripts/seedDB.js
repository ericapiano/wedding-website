const mongoose = require("mongoose");
const db = require("../models");

// mongoose.connect("mongodb://localhost/weeee", { useNewUrlParser: true });

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/weeee"
);

const rsvpListSeed = [
  {
    firstName: "Dhanashree",
    lastName: "Phalak",
    status: "Attending",
    date: new Date(Date.now()),
    peopleCount: 4,
  },
  {
    firstName: "Shivani",
    lastName: "Choudhary",
    status: "May be",
    date: new Date(Date.now()),
    peopleCount: 2,

  },
  {
    firstName: "Bhagyashree",
    lastName: "abc",
    status: "Not Attending",
    date: new Date(Date.now()),
    peopleCount: 1
  }
]
const eventListSeed = [
  {
    eventName: "Bridal Shower",
    date: "JUNE 17 2019",
    locationName: "Akbar Palace",
    address: "21 Cortlandt St Suite 1, Edison, NJ 08837"
  },
  {
    eventName: "Sangeet",
    date: "JUNE 22 2019",
    locationName: "Akbar Palace",
    address: "21 Cortlandt St Suite 1, Edison, NJ 08837"
  }, {
    eventName: "Wedding",
    date: "November 1 2019",
    locationName: "legacy castle",
    address: "141 NJ-23, Pompton Plains, NJ 07444"
  }, {
    eventName: "Reception",
    date: "November 1 2019",
    locationName: "legacy castle",
    address: "141 NJ-23, Pompton Plains, NJ 07444"
  },
]
const registryListSeed = [
  {
    storeName: "Bed Bath Beyond",
    text: "Search for our names on the site or print our registry in the store.",
    locationName: "https://www.bedbathandbeyond.com/store/giftregistry/registry-search-guest?icid=quicklinks_one"
  },
  {
    storeName: "Target",
    text: "Search for our names on the site or print our registry in the store.",
    locationName: "https://www.target.com/gift-registry/"
  }, {
    storeName: "Marshalls",
    text: "Search for our names on the site or print our registry in the store.",
    locationName: "Not yet done"
  },
]
const userSeed = [
  {
    userName: "jack",
    password: "abcd"
  },
  {
    userName: "jill",
    password: "wxyz"
  },
  {
    userName: "test",
    password: "testing"
  }
]

db.USER
  .remove({})
  .then(() => db.USER.collection.insertMany(userSeed))
  .then(data => {
    // console.log(data.length + " user records inserted!");
  })
  .catch(err => {
    console.error(err);
  });

db.EVENT
  .remove({})
  .then(() => db.EVENT.collection.insertMany(eventListSeed))
  .then(data => {
    // console.log(data.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
  });

db.RSVP
  .remove({})
  .then(() => db.RSVP.collection.insertMany(rsvpListSeed))
  .then(data => {
    // console.log(data.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
  });

db.REGISTRY
  .remove({})
  .then(() => db.REGISTRY.collection.insertMany(registryListSeed))
  .then(data => {
    // console.log(data.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
  });
