import React, { Component } from "react";
import "./Login.css"
import API from '../../utils/API';

class Login extends Component {
  state = {
    userName:"",
    password:""
  }
// on changing state
handleChange = event => {
  const {name, value} = event.target;
  this.setState({[name]: value});
}//  on submit 
  handleSubmit = event => {
    event.preventDefault();
// if empty returns false
    if (!this.state.userName || !this.state.password) {
      alert("enter valid Username or Password")//use modal instead
      return false;
    }

    API
    .postCredentials({
      userName: this.state.userName,
      password: this.state.password
    })

  }
  render() {
    return (
      <div className="form">
        <form action="submit" className="login">
          name
          <input name="userName" type="text" onChange={this.handleChange} />

          password
          <input name="password"type="text" onChange={this.handleChange}/>

          <button type="submit" onClick={this.handleSubmit}>submit</button>
        </form>
      </div>
    )
  }
}

export default Login;