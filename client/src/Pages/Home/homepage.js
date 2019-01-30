import React, { Component } from "react";

import "./homepage.css";
import perfectImg from "../images/perfect.png";
import Countdown from "../../Countdown.js";

class Homepage extends Component {
  state = {};
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();

    return (
      <div className="main">
        <div
          className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center"
          // style={styles.jumbotron}
          // style={styles.cursive}
        >
          <br />
          <p>
            <img className="heart" src={perfectImg} alt="heart" />
          </p>
          {/* <p className="date">June 22, 2019</p> */}
          <Countdown className="counter" date={`${year}-06-20T00:00:00`} />

          {/* <p>Looking to meet your next best friend?</p> */}
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <iframe width="1140" height="515" src="https://www.youtube.com/embed/SGNkJdyWnqA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
