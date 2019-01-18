import React, { Component } from "react";
import "./Login.css"
import API from '../../utils/API';

class Login extends Component {
  state = {
    userName:"",
    password:""
  }
// on changing state
  handleChange(){}
//  on submit 
  handleSubmit = event => {
    event.preventDefault();
// if empty returns false
    if (!this.state.userName || !this.state.password) {
      alert("enter valid Username or Password")
      return false;
    }
    API
    .postCredentials(this.state.userName, this.state.password)

  }
  render() {
    return (
      <div className="form">
        <form action="submit" className="login">
          name
          <input type="text" />

          password
          <input type="text"/>

          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default Login;