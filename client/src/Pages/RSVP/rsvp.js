import React, { Component } from "react";
import "./rsvp.css";
import API from "../../utils/API";
import perfectImg from "../images/perfect.png";

// import { timingSafeEqual } from "crypto";

class Rsvp extends Component {
  state = {
    Rsvp: [],
    FilterGuests: [],
    value: "choose options",
    status: "Choose status"
  };
  componentDidMount() {
    this.getRsvp();
  }

  getRsvp() {
    API.getAllRsvp()
      .then(({ data }) => {
        this.setState({ Rsvp: data });
        // console.log(this.state);
      })
      .catch(err => console.log(err));
  }
  // finding people in db
  handleInputChange = e => {
    let name = e.target.value;
    if (name !== "") {
      this.setState({
        FilterGuests: this.state.Rsvp.filter(guest => {
          return guest.firstName.startsWith(name); //does it takes starts with?/?????
        })
      });
    } else {
      this.setState({ FilterGuests: [] });
    }
  };

  // let user change their status
  handleStatusChange = (rsvpId, event) => {
    // create copy of state
    const rsvp = [...this.state.Rsvp];
    this.setState({ status: event.target.value });
    //iterate through array to check id  ;
    for (var i = 0; i < rsvp.length; i++) {
      // console.log(rsvp[i]);
      if (rsvp[i]._id === rsvpId) {
        // console.log("matched");
        rsvp[i].status = event.target.value;
        API.updateStatusRsvp(rsvpId, rsvp[i]);
      }
    }
  };
  // let user change their status

  handleCountChange = (rsvpId, event) => {
    // create copy of state
    const rsvp = [...this.state.Rsvp];
    this.setState({ value: event.target.value });
    //iterate through array to check id  ;
    for (var i = 0; i < rsvp.length; i++) {
      // console.log(rsvp[i]);
      if (rsvp[i]._id === rsvpId) {
        // console.log("matched");
        rsvp[i].peopleCount = event.target.value;
        API.updateCountRsvp(rsvpId, rsvp[i]);
      }
    }
    // console.log(...this.state.Rsvp)
  };

  render() {
    return (
      <div>
        <div
          className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center"
          // style={styles.jumbotron}
          // style={styles.cursive}
        >
          <h1 className="display-4">R.S.V.P.</h1>
          <p>
            <img src={perfectImg} alt="heart" />
          </p>
        </div>

        <div className="rsvplist">
          {/* <h1>RSVP</h1> */}
          <input
            className="search"
            placeholder="search for your name..."
            onChange={e => this.handleInputChange(e)}
          />
          <button className="searchBtn" type="submit">
            Search
          </button>

          {this.state.FilterGuests.map((rsvp, index) => {
            return (
              <div className="rsvp nameClick" key={rsvp._id}>
                <span className="heading">{rsvp.firstName}</span>
                <span className="lastNameMargin">{rsvp.lastName}</span>
                <span>
                  <select
                    className="float1"
                    value={this.state.value}
                    onChange={event => this.handleStatusChange(rsvp._id, event)}
                  >
                    <option value="default">{this.state.status}</option>
                    <option value="Attending">Attending</option>
                    <option value="May Be">May Be</option>
                    <option selected value="Not Attending">
                      Not Attending
                    </option>
                  </select>
                </span>
                <span>
                  <select
                    className="float2"
                    value={this.state.value}
                    onChange={event => this.handleCountChange(rsvp._id, event)}
                  >
                    <option value="default">{this.state.value}</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option selected value="3">
                      3
                    </option>
                  </select>
                </span>
              </div>
            );
          })}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Rsvp;
