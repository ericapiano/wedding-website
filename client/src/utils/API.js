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
  updateRsvp: function(){
    console.log("updating rsvp");
    return axios.update('/api/rsvp/:id')
  },
  postCredentials: function(userData){
    console.log("posting credentials");
    console.log(userData)
    return axios.get('/api/login/', userData)
  }
  

}