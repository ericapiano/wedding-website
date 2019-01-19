import React, { Component } from "react";
import "./Events.css";
// import perfectImg from "../images/";
import perfectImg from "../images/perfect.png";
import { Container, Row, Col } from "reactstrap";

class Events extends Component {
  state = {};

  render() {
    return (
      <div>
        <div
          className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center"
          // style={styles.jumbotron}
          // style={styles.cursive}
        >
          <h1 className="display-4">Directions</h1>
          <br />
          <p>
            <img src={perfectImg} alt="heart" />
          </p>

          {/* <p>Looking to meet your next best friend?</p> */}
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              {/* <p>Looking to meet your next best friend?</p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
