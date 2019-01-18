import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

const styles = {
  navcolor: {
    color: "black",
    backgroundColor: "transparent"
  }
};

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color={"transparent"} caret>
          {this.props.title}
        </DropdownToggle>
        <DropdownMenu style={styles.navcolor}>
          <Link to={this.props.link1}>
            <DropdownItem>{this.props.text1}</DropdownItem>
          </Link>
          <Link to={this.props.link2}>
            <DropdownItem>{this.props.text2}</DropdownItem>
          </Link>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
