import React, { Component } from "react";
import API from "../../utils/API";
import Map from "../../Components/Map";
import { Marker } from "leaflet";
import "./Events.css";
import perfectImg from "../images/perfect.png";
import { Container, Row, Col } from "reactstrap";
import middleHeart from "../images/middleHeart.png";
import time from "../images/time.png";
import Moment from "react-moment";

class Events extends Component {
  state = {
    Events: []
  };
  componentDidMount() {
    this.getEvents();
    // console.log("getevents triggerred here");
  }

  getEvents = () => {
    API.getAllEvents()
      .then(({ data }) => {
        this.setState({ Events: data });
        // console.log("working till here");
        // console.log(this.state);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <div
          className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center"
          // style={styles.jumbotron}
          // style={styles.cursive}
        >
          <h1 className="display-4">Celebrate with us</h1>
          <p>
            <img src={perfectImg} alt="heart" />
          </p>
        </div>
        <Map />
        <div className="eventlist row">
          {this.state.Events.map((event, index) => {
            return (
             
              <React.Fragment>
                <div className="row2 col-3">
                  <Col className="column " key={event._id} xs="12">
                    <p className="titleCard2">{event.eventName}</p>
                    <div className="small">{event.locationName}</div>
                    <img className="time" src={time} alt="time" />
                    <Moment
                      className="superSmall"
                      format={"MM-DD-YYYY [at] hh:mm a"}
                    >
                      {event.date}
                    </Moment>
                    {/* // {event.date} */}
                  </Col>
                </div>

                {index < 2 ? (
                  <img
                    src={middleHeart}
                    className="middleHeartevent col-1"
                    alt="heart"
                  />
                ) : (
                  ""
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Events;
