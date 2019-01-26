import React, { Component } from "react";

import "./homepage.css";
import perfectImg from "../images/perfect.png";
import Countdown from "../../Countdown.js";

// import dogpic from "./images/pups.jpg";

// const styles = {
//   cursive: {
//     // backgroundImage: `url(${dogpic})`,
//     // backgroundSize: "cover",
//     // backgroundPosition: "center",
//     // backgroundBlendMode: "multiply",
//     // // backgroundColor: "red",
//     // color: "white",
//     // textShadow: "0 0 10px black",
//     // minHeight: "45vh"
//   }
// };

class Homepage extends Component {
  state = {};
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();

    return (
      <div>
        <div
          className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center"
          // style={styles.jumbotron}
          // style={styles.cursive}
        >
          <h1 className="display-4">Jack and Jill</h1>
          <br />
          <p>
            <img className="heart" src={perfectImg} alt="heart" />
          </p>
          <p className="date">June 22, 2019</p>
          <Countdown className="counter" date={`${year}-06-20T00:00:00`} />
          <br />
          <br />

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

export default Homepage;
