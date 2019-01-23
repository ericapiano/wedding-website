import React, { Component } from "react";
import "./aboutcouple.css";
import perfectImg from "../images/perfect.png";

import { Container, Row, Col } from "reactstrap";
// import LoadingGif from "../../Components/LoadingGif";

class AboutCouple extends Component {
  state = {
    showPage: true
  };
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       showPage: true
  //     });
  //   }, 3000);
  // }
  // state = {};
  render() {
    return (
      <div>
        <div>
          <div
            className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center"
            // style={styles.cursive}
          >
            <h1 className="display-4">Our Love Story</h1>

            {/* <p> */}
              <img src={perfectImg} alt="heart" />
            {/* </p> */}
          </div>

          <div>
            <Container />
            <Row className="row2">
              <Col className="column bioPicContainer" xs="6">
                <img
                  className="bioPic left"
                  src="https://image.shutterstock.com/mosaic_250/2967241/657764164/stock-photo-portrait-of-beautiful-redhead-girl-smiling-looking-at-camera-657764164.jpg"
                  alt="Bride"
                />
                <p className="titleCard">Bride</p>
              </Col>
              <Col className="column bioPicContainer" xs="6">
                <figure className="bioPic right">
                  <img
                    className="bioPic"
                    src="https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA="
                    alt="Groom"
                  />
                </figure>

                <p className="titleCard">Groom</p>
              </Col>

              <p className="info">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit consectetur sint qui officiis velit beatae voluptatibus
                eveniet quam totam id, eos quaerat amet veniam deleniti sequi
                itaque. Ea, vitae ullam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Neque, officiis provident? Facilis, ipsam iste
                possimus cupiditate rerum obcaecati beatae et delectus numquam
                doloremque vitae, iure voluptate quasi impedit architecto non.
              </p>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutCouple;
