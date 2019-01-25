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
  
// =============login routes===========
  /* 
    loginCreds = {username: "alex", "password": 12345Password!}
  */
  login: function(loginCreds) {
    return axios.post('/api/user/login', loginCreds)
  },
  /* 
    Path to check if user is logged in
  */
  loginCheck: function() {
    return axios.get('/api/user/login')
  },
  /* 
    Path to log out
  */
  logout: function() {
    return axios.get('/api/logout')
  },
  register: function(loginCreds){
    console.log("registering new user")
    return axios.post('/api/user/register', loginCreds)
  }
  }