import React, { Component } from "react";
import "./Events.css";
// import perfectImg from "../images/";
import perfectImg from "../images/perfect.png";
import { Container, Row, Col } from "reactstrap";
import Map from "../../Components/Map";
import { Marker } from "leaflet";

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
          <p>
            <img src={perfectImg} alt="heart" />
          </p>
        </div>

        <div className="w3-row">
          <div className="w3-col s5 w3-green w3-center">
            <Map>
              {/* <Marker>
                A pretty CSS3 popup.
                <br />
                Easily customizable.
              </Marker> */}
            </Map>

            <p>s3</p>
          </div>
          <div className="w3-col s7 w3-dark-grey w3-center">
            <p>s9</p>
          </div>
        </div>

        {/* <div className="w3-row w3-container">
          <div className="w3-col s7 w3-green w3-center">
            <p>s3</p>
          </div>
          <div className="w3-col s5 w3-dark-grey w3-center">
            <p>s9</p>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Events;
