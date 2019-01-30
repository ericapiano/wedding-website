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
            <img id="img" src={perfectImg} alt="heart" />
            {/* </p> */}
          </div>

          <div>
            <Container />
            <Row className="row2">
              <Col className="column bioPicContainer" xs="6">
                <img className="bioPic left" src="liv.jpg" alt="Bride" />
                <p className="titleCard">Bride</p>
              </Col>
              <Col className="column bioPicContainer" xs="6">
                <figure className="bioPic right">
                  <img className="bioPic" src="zach.jpg" alt="Groom" />
                </figure>

                <p className="titleCard">Groom</p>
              </Col>

              <p className="info">
                Jill and Jack met early in their college career when she was a
                Freshman and he was a Sophomore. They were both taking an
                elective science class and were assigned to be lab partners. One
                day Jack asked Jill if she wanted to get coffee after class, and
                the two have been hanging out ever since. After they both
                graduated, they moved to New York City together for work. On
                December 23, 2018 they went out for a coffee and to walk around
                and see the city for the holidays. As they were taking their
                picture in front of the Rockefeller Christmas tree, Jack got
                down on one knee and asked Jill to spend the new year, and the
                rest of their years, together.
              </p>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutCouple;
