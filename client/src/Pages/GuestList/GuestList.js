import React, { Component } from "react";
import API from "../../utils/API";
import "./GuestList.css";
import Moment from "react-moment";

class GuestList extends Component {
  state = {
    showBtns: true,
    showAdd: false,
    showGuestForm: false,
    showEventForm: false,
    showEvents: false,
    Rsvp: [],
    Events: [],
    firstName: "",
    lastName: "",
    status: "",
    peopleCount: "",
    eventName: "",
    date: "",
    locationName: ""
  };
  guests = x => {
    // console.log(x)
    this.setState({ showEvents: false });
    this.setState({ showAdd: true });
    API.getAllRsvp()
      .then(({ data }) => {
        this.setState({ Rsvp: data });
        // console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  events = y => {
    // console.log(y)
    this.setState({ showAdd: true });
    this.setState({ showEvents: true });
    API.getAllEvents()
      .then(({ data }) => {
        this.setState({ Events: data });
        // console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  guestForm = f => {
    // console.log(f)
    this.setState({ showGuestForm: true });
  };
  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
    // console.log()
  };
  eventForm = () => {
    this.setState({ showEventForm: true });
  };
  createGuest = e => {
    e.preventDefault();
    API.createNewGuest({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      status: this.state.status,
      peopleCount: this.state.peopleCount
    })
      .then(({ data }) => {
        API.getAllRsvp()
          .then(({ data }) => {
            this.setState({
              Rsvp: data,
              firstName: "",
              lastName: "",
              status: "",
              peopleCount: "",
              showGuestForm: false
            });
            // console.log(this.state);
          })
          .catch(err => console.log(err));
        // console.log(this.state);
      })
      .catch(err => console.log(err));
  };
  createEvent = e => {
    e.preventDefault();
    API.createNewEvent({
      eventName: this.state.eventName,
      locationName: this.state.locationName,
      date: this.state.date
    })
      .then(({ data }) => {
        // this.setState({ Events: data });
        // console.log(this.state);
        API.getAllEvents()
          .then(({ data }) => {
            API.getAllEvents().then(({ data }) => {
              this.setState({
                Events: data,
                eventName: "",
                locatioName: "",
                status: "",
                address: "",
                showEventForm: false
              });
              // console.log(this.state);
            });
          })
          // console.log(this.state);

          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h3>Select an Action</h3>
        <span>
          <button className="cursor-style" onClick={() => this.guests("guest")}>
            Guest List
          </button>
        </span>
        <span>
          <button
            className="cursor-style"
            onClick={() => this.events("events")}
          >
            Events List
          </button>
        </span>
        {this.state.showEvents ? (
          // All events content
          <div>
            {this.state.Events.map((event, index) => {
              return (
                <div className="rsvp nameClick p-0 mx-5 my-1" key={event._id}>
                  <div className="row-style">
                    <span className="heading ml-3">{event.eventName}</span>
                    <span className="lastNameMargin">{event.locationName}</span>
                    <span className="lastNameMargin">{event.date}</span>
                  </div>
                </div>
              );
            })}
            {this.state.showAdd == true ? (
              <button
                className="row-style p-0 mx-5 my-1"
                onClick={() => this.eventForm("clicked")}
              >
                +
              </button>
            ) : null}
            {this.state.showEventForm == true ? (
              <form className="row-style p-0 mx-5 my-1">
                <input
                  type="text"
                  name="eventName"
                  value={this.state.eventName}
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="EventName"
                />
                <input
                  type="text"
                  name="locationName"
                  value={this.state.locationName}
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="Location Name"
                />
                <input
                  type="text"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="date"
                />
                <button type="submit" onClick={this.createEvent}>
                  create
                </button>
              </form>
            ) : null}
          </div>
        ) : (
          <div>
            {this.state.Rsvp.map((rsvp, index) => {
              return (
                <div className="rsvp nameClick p-0 mx-5 my-1" key={rsvp._id}>
                  <div className="row-style">
                    <span className="heading ml-3">{rsvp.firstName}</span>
                    <span className="lastNameMargin">{rsvp.lastName}</span>
                    <span className="lastNameMargin">{rsvp.status}</span>
                    <span className="lastNameMargin">{rsvp.peopleCount}</span>
                  </div>
                </div>
              );
            })}
            {this.state.showAdd == true ? (
              <button
                className="row-style p-0 mx-5 my-1"
                onClick={() => this.guestForm("clicked")}
              >
                +
              </button>
            ) : null}
            {this.state.showGuestForm == true ? (
              <form className="row-style p-0 mx-5 my-1">
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="FirstName"
                />
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="LastName"
                />
                <input
                  type="text"
                  name="status"
                  value={this.state.status}
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="Status"
                />
                <input
                  type="text"
                  name="peopleCount"
                  value={this.state.peopleCount}
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="PeopleCount"
                />
                <button type="submit" onClick={this.createGuest}>
                  create
                </button>
              </form>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default GuestList;
