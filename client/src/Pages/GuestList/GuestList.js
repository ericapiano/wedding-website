import React, { Component } from "react";
import API from '../../utils/API';
import './GuestList.css'

class GuestList extends Component {
  state = {
    GuestName: "",
    showBtns: true,

  }
  guests  = (x)=> {
    console.log(x)


    
  }
  events = (y) => {
    console.log(y)
  }
  render() {
    
    return (
      <div>
        <h3>Select an Action</h3>
        <span>
          <button className="cursor-style" onClick={() => this.guests("word") }>Guest List</button> 
        </span>
        <span>
          <button className="cursor-style" onClick={() => this.events("events") }>Events List</button>
        </span>
      </div>
    )


  }
}

export default GuestList;