import React, { Component } from "react";
import "./photos.css";
import photoData from "../../photos.json";
import Jumbotron from "../../Components/Jumbotron";
import ModalExample from "../../Components/modal";

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalImage: "",
      modalIsOpen: false
    };
  }
  changeImageName(i) {
    console.log(i);
    this.setState({ modalImage: i, modalIsOpen: true });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <Jumbotron header="Gallery" />
        <ModalExample
          imageName={this.state.modalImage}
          modalIsOpen={this.state.modalIsOpen}
        />
        {photoData.map(photo => {
          return (
            <div className="card">
              <div className="img-container">
                <img
                  onClick={() => this.changeImageName(photo.image)}
                  className="img-thumbnail img-responsive"
                  src={photo.image}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Photos;
