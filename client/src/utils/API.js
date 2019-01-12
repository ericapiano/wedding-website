import axios from "axios";

export default {
  // Gets all books
  geteventlists: function(list) {
    return axios.get("/api/events", list);
  },
  getrsvplists: function(list){
    return axios.get("/api/rsvp", list);
  },
  getregistrylists: function(list){
    return axios.get("/api/registry", list);
  },
};
