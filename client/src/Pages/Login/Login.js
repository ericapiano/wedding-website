// ===============================
//
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import "./Login.css";
import bells from "../images/bells.jpg";

class Login extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    password: ""
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  // Method to handle user login, should redirect to main page when done
  login = e => {
    e.preventDefault();
    API.login({ username: this.state.username, password: this.state.password })
      .then(res => {
        // console.log(res.data);
        // console.log("logged in")
        this.setState({ isLoggedIn: res.data });
      })
      .catch(err => console.log(err.response));
  };
  register = e => {
    e.preventDefault();

    API.register({
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      // console.log(res.data);
      // console.log("registered successfully")
    });

    API.register({
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      console.log(res.data);
      console.log("registered successfully");
    });
  };

  render() {
    // If user is logged in, take them to main page
    if (this.state.isLoggedIn) {
      return <Redirect to="/guestlist" />;
    }

    return (
      <div className="container my-5">
        <div className="row justify-content-center loginBox">
          <form>
            {/* <img className="bells" src={bells} alt="bells" /> */}

            <h3 className="login">Login!</h3>
            <div className="form-group">
              <label className="username" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="enter username"
              />
              <small id="usernameHelp" className="form-text text-muted" />
            </div>
            <div className="form-group">
              <label className="password" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="enter password"
              />
            </div>

            <button
              type="submit"
              className="btn loginbtn btn-success mr-4"
              onClick={this.login}
            >
              Login
            </button>
            <button
              type="submit"
              className="btn loginbtn btn-success"
              onClick={this.register}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
