import React from "react";
import "./photos.css";
import photoData from "../../photos.json";
import Jumbotron from "../../Components/Jumbotron";

const Photos = props => {
  return (
    <div>
      <Jumbotron header="Gallery" />

      {photoData.map(photo => {
        return (
          <div className="card">
            <div className="img-container">
              <img className="img-thumbnail img-responsive" src={photo.image} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Photos;
