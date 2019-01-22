import React, { Component } from "react";
import "./Events.css";
// import perfectImg from "../images/";
import perfectImg from "../images/perfect.png";
import { Container, Row, Col } from "reactstrap";
import Map from "../../Components/Map";
import { Marker } from "leaflet";
import middleHeart from "../images/middleHeart.png";
import time from "../images/time.png";

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
          <h1 className="display-4">Celebrate with us</h1>
          <p>
            <img src={perfectImg} alt="heart" />
          </p>
        </div>

        <div className="w3-row">
          <div className="w3-col s5 w3-green w3-center">
            <Map />
          </div>

          <br />

          <Container />
          <Row className="row2">
            <Col className="column " xs="3">
              <p className="titleCard">Rehersal</p>
              <div className="small">
                Friday, June 21, 2019
                <br />
                Saint Francis Cabrini Church{" "}
              </div>{" "}
              <img className="time" src={time} alt="time" />
            </Col>

            <Col className="column " xs="1">
              {" "}
              <br />
              <img className="middleHeart" src={middleHeart} alt="heart" />
            </Col>

            <Col className="column " xs="3">
              <p className="titleCard">Ceremony</p>
              <p>
                {" "}
                <div className="small">
                  Friday, June 22, 2019
                  <br />
                  Saint Francis Cabrini Church
                </div>{" "}
              </p>
              <img className="time" src={time} alt="time" />
            </Col>

            <Col className="column " xs="1">
              {" "}
              <br />
              <img className="middleHeart" src={middleHeart} alt="heart" />
            </Col>

            <Col className="column " xs="3">
              <p className="titleCard">Reception</p>
              <div className="small">
                Friday, June 22, 2019
                <br />
                The Palace at Somerset Park{" "}
              </div>{" "}
              <img className="time" src={time} alt="time" />
              <p />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Events;
