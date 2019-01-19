import axios from 'axios';

export default {
  getAllEvents: function() {
    console.log("getting events with axios");
    return axios.get('/api/events/')
  },
  getAllRsvp: function() {
    console.log("getting rsvp with axios");
    return axios.get('/api/rsvp/')
  },
  updateStatusRsvp: function(guestId , obj){
    // console.log("updating rsvp 11111");
    return axios.put(`/api/rsvp/${guestId}`,obj) 
  },
  updateCountRsvp: function(guestId , obj){
    // console.log("updating rsvp 11111");
    return axios.put(`/api/rsvp/${guestId}`,obj) 
  },
  postCredentials: function(userData){
    console.log("posting credentials");
    console.log(userData)
    return axios.post('/api/login/', userData)
  }
  }