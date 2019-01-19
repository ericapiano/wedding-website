import React, { Component } from "react";
import "./rsvp.css";
import API from "../../utils/API";

class Rsvp extends Component {
  state = {
    Rsvp: [],
    FilterGuests: []
  };
  componentDidMount() {
    this.getRsvp();
  }

  getRsvp() {
    API.getAllRsvp()
      .then(({ data }) => {
        this.setState({ Rsvp: data });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  handleInputChange = e => {
    let name = e.target.value;
    if (name != "") {
      this.setState({
        FilterGuests: this.state.Rsvp.filter(guest => {
          return guest.firstName.includes(name);
        })
      });
    } else {
      this.setState({ FilterGuests: [] });
    }
  };
  render() {
    return (
      <div className="rsvplist">
        <h1>RSVP</h1>
        <input onChange={e => this.handleInputChange(e)} />
        {
          // map rsvp suggestion
        }

        {this.state.FilterGuests.map((rsvp, index) => {
          return (
            <div className="rsvp" key={rsvp._id}>
              <h3 className="heading">{rsvp.firstName}</h3>
              <h5>{rsvp.date}</h5>
              <h5>{rsvp.lastName}</h5>
              <h5>{rsvp.peopleCount}</h5>
              <h5>{rsvp.status}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Rsvp;
