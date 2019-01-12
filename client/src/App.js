import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import components from react router dom
// import {browser}
import Text from "./components/Text";


function App() {
  return (
    <Router>
      <div>
        <Text 
        
        />
        
        <Switch>
          { <Route exact path="/" />
          /*<Route exact path="/events" component={Events} /> */}
          {/* <Route exact path="/records/:id" component={Detail} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
