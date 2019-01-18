// import React, { Component } from "react";
import React, { Component } from "react";
import "./rsvp.css";
import API from '../../utils/API';

class Rsvp extends Component {
  state = {
    Rsvp: []
  };
  componentDidMount() {
    this.getRsvp();
  }

  getRsvp = () => {
    API.getAllRsvp()
      .then(({ data }) => {
        this.setState({ Rsvp: data });
        console.log(this.state);
      })
      .catch(err => console.log(err))
  }
  render() {
    return (

      <div  className="rsvplist">
        <h1>Rsvp</h1>
        {
          this.state.Rsvp.map(rsvp => {
            return (
              <div className="rsvp" key={rsvp.id}>
                {/* <h3 className="heading">
                  {rsvp.firstName}
                </h3>
                <h5>
                  {rsvp.date}
                </h5>
                <h5>{rsvp.lastName}</h5>
                <h5>{rsvp.peopleCount}</h5>
                <h5>{rsvp.status}</h5> */}

              </div>
            )
          })
        }
      </div>

    )
  }
}

export default Rsvp;