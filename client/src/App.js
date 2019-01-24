import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registry from "./Pages/Registry";
import Navbar from "./Components/Navbar";
import AboutParty from "./Pages/AboutParty";
import AboutCouple from "./Pages/AboutCouple";
import Homepage from "./Pages/Home";
import RSVP from "./Pages/RSVP";
import Events from "./Pages/Events";
import Login from "./Pages/Login";
// import GuestList from "./Pages/GuestList";
import Names from "./Components/Names"
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Names/> */}
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about-couple" component={AboutCouple} />
        <Route exact path="/about-party" component={AboutParty} />
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/rsvp" component={RSVP} />
        <Route exact path="/registry" component={Registry} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/submit" component={GuestList} /> */}
      </div>
    </Router>
  );
};

export default App;
// note
