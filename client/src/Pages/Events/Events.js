import React, { Component } from "react";
import API from "../../utils/API";
import Map from "../../Components/Map";
import { Marker } from "leaflet";
import "./Events.css";
import perfectImg from "../images/perfect.png";
import { Container, Row, Col } from "reactstrap";
import middleHeart from "../images/middleHeart.png";
// import clock from "../images/clock.png";
import calendar from "../images/calendar.png";
import local from "../images/local.png";
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
            <img id="img" src={perfectImg} alt="heart" />
          </p>
        </div>
        <Map />
        <div className="eventlist row">
          {this.state.Events.map((event, index) => {
            return (
              <React.Fragment>
                <div className="eventCards col-sm-6 col-xs-12 col-lg-4">
                  <div className="row2">
                    <Col className="column column12 " key={event._id} xs="12">
                      <p className="titleCard2">{event.eventName}</p>
                      <div className="small">{event.locationName}</div>

                      <img className="time" src={calendar} alt="time" />
                      <Moment className="superSmall" format={"MM/DD/YYYY"}>
                        {event.date}
                      </Moment>

                      <p className="address">{event.address}</p>

                      <form
                        className="form"
                        action="http://maps.google.com/maps"
                        method="get"
                        target="_blank"
                      >
                        <input
                          className="form"
                          type="hidden"
                          name="daddr"
                          value={event.address}
                        />
                        <input
                          className="form2"
                          type="submit"
                          value="Get directions"
                        />
                      </form>
                      {/* // {event.date} */}
                    </Col>
                  </div>
                </div>

                {/* {index < 2 ? (
                  <img
                    src={middleHeart}
                    className="middleHeartevent col-1"
                    alt="heart"
                  />
                ) : (
                  ""
                )} */}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Events;
