import React, { Component } from "react";
import "./aboutparty.css";
// import perfectImg from "../images/";
import bride from "../images/bride.png";
import groom from "../images/groom.png";
import perfectImg from "../images/perfect.png";
import { Container, Row, Col } from "reactstrap";
import middleHeart from "../images/middleHeart.png";

class AboutParty extends Component {
  state = {};

  render() {
    return (
      <div>
        <div
          className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center"
          // style={styles.cursive}
        >
          <h1 className="display-4">We couldn't do it without you</h1>

          <p>
            <img src={perfectImg} alt="heart" />
          </p>
        </div>

        <div>
          <Container />
          <Row className="row">
            <Col xs="6" className="bride-container">
              <p>
                <img className="weddingParty" src={bride} alt="bride" />
              </p>
              <div className="flip-box">
                <div className="flip-box-inner">
                  <img
                    className="flip-box-front"
                    src="cwnj.png"
                    alt="Maid of Honor"
                  />
                  <div className="flip-box-back">
                    Claudia
                    <img className="tiny" src={middleHeart} alt="heart" />
                    <p className="fancy"> Maid of Honor </p>
                  </div>
                </div>
              </div>
              <div className="flip-box">
                <div className="flip-box-inner">
                  <img className="flip-box-front" src="jackie.jpg" />
                  <div className="flip-box-back">
                    Jackie
                    <img className="tiny" src={middleHeart} alt="heart" />
                    <p className="fancy"> Bridesmaid </p>
                  </div>
                </div>
              </div>
              <div className="flip-box">
                <div className="flip-box-inner">
                  <img
                    className="flip-box-front"
                    src="rachel.png"
                    alt="Bridesmaid"
                  />
                  <div className="flip-box-back">
                    Rachel
                    <img className="tiny" src={middleHeart} alt="heart" />
                    <p className="fancy"> Bridesmaid </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6" className="groom">
              <p>
                <img className="weddingParty" src={groom} alt="groom" />
              </p>
              <div className="flip-box">
                <div className="flip-box-inner">
                  <img
                    className="flip-box-front"
                    src="ben.jpg"
                    alt="Best Man"
                  />
                  <div className="flip-box-back">
                    Ben
                    <img className="tiny" src={middleHeart} alt="heart" />
                    <p className="fancy"> Best Man </p>
                  </div>
                </div>
              </div>
              <div className="flip-box">
                <div className="flip-box-inner">
                  <img
                    className="flip-box-front"
                    src="tpg.png"
                    alt="Groomsman"
                  />
                  <div className="flip-box-back">
                    Brian
                    <img className="tiny" src={middleHeart} alt="heart" />
                    <p className="fancy"> Groomsman </p>
                  </div>
                </div>
              </div>

              <div className="flip-box">
                <div className="flip-box-inner">
                  <img
                    className="flip-box-front"
                    src="greg.png"
                    alt="Groomsman"
                  />
                  <div className="flip-box-back">
                    Greg
                    <img className="tiny" src={middleHeart} alt="heart" />
                    <p className="fancy"> Groomsman </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AboutParty;
