
import React, { Component } from "react";
import API from '../../utils/API';

class Events extends Component {
  state = {
    Events: []
  };
  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    API.getAllEvents()
      .then(({ data }) => {
        this.setState({ Events: data });
        console.log(this.state);
      })
      .catch(err => console.log(err))
  }
  render() {
    return (

      <div  className="eventlist">
        <h1>Events</h1>
        {
          this.state.Events.map(event => {
            return (
              <div className="event" key={event.id}>
                <h3 className="heading">
                  {event.eventName}
                </h3>
                <h5>
                  {event.date}
                </h5>
                <h5>{event.locationName}</h5>
              </div>
            )
          })
        }
      </div>

    )
  }
}

export default Events;