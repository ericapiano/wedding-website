import perfectImg from "../Pages/images/perfect.png";
import React from "react";

const Jumbotron = props => {
  return (
    <div>
      <div
        className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center"
        // style={styles.cursive}
      >
        <h1 className="display-4">{props.header}</h1>

        {/* <p> */}
        <img src={perfectImg} alt="heart" />
        {/* </p> */}
      </div>
    </div>
  );
};

export default Jumbotron;
