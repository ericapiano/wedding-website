import React, { Component } from "react";
import "./photos.css";
import photoData from "../../photos.json";
import Jumbotron from "../../Components/Jumbotron";
import ModalExample from "../../Components/modal";
import perfectImg from "../images/perfect.png";

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalImage: "",
      modalIsOpen: false,
      modalTitle: ""
    };
  }
  changeImageName(i, title) {
    console.log(i);
    this.setState({ modalImage: i, modalIsOpen: true, modalTitle: title });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <div
          className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center"
          // style={styles.jumbotron}
          // style={styles.cursive}
        >
          <h1 className="display-4">Gallery</h1>
          <p>
            <img src={perfectImg} alt="heart" />
          </p>
        </div>
        <span className="photoContainer">
          {this.state.modalIsOpen ? (
            <ModalExample
              title={this.state.modalTitle}
              imageName={this.state.modalImage}
              modalIsOpen={this.state.modalIsOpen}
            />
          ) : null}
          {photoData.map(photo => {
            console.log(photo);
            return (
              <div className="card">
                <div className="img-container">
                  <img
                    onClick={() =>
                      this.changeImageName(photo.image, photo.title)
                    }
                    className="img-thumbnail img-responsive"
                    src={photo.image}
                  />
                </div>
              </div>
            );
          })}
        </span>
      </div>
    );
  }
}

export default Photos;
