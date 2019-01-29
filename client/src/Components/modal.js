import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    console.log("this.props.imageName", this.props.imageName);
    this.state = {
      imageName: this.props.imageName,
      modal: this.props.modalIsOpen || false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.imageName !== this.props.imageName) {
      //Perform some operation
      this.setState({ imageName: newProps.imageName, modal: true });
      // this.classMethod();
    }
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} title={this.title} />
          <ModalBody>
            {/* {this.state.image} */}
            <img className="innerImg" src={this.props.imageName} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
