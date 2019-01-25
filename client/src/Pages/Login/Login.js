// import React, { Component } from "react";
// import "./Login.css"
// import API from '../../utils/API';


// class Login extends Component {
//   state = {
//     userName:"",
//     password:""
//   }
// // on changing state
// handleChange = event => {
//   const {name, value} = event.target;
//   this.setState({[name]: value});
// }

// //  on submit 
//   handleSubmit = event => {
//     event.preventDefault();
// // if empty returns false
//     if (!this.state.userName || !this.state.password) {
//       return false;
//     }
//     // console.log("creds: "+ this.state.password+ this.state.userName)
//     API
//     .postCredentials({
//       userName: this.state.userName,
//       password: this.state.password
//     })
//       .then(res => {
//         console.log(res.data);
//         this.setState({isLoggedIn: res.data})

//       })
//       .catch(err => console.log(err.response));
//   }

//   render() {
//     return (
//       <div className="back">
//         <div className="form ">
//           <form action="submit" className="login">
//             name
//           <input name="userName" type="text" onChange={this.handleChange} />

//             password
//           <input name="password" type="text" onChange={this.handleChange} />

//             <button type="submit" onClick={this.handleSubmit}>submit</button>
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

// export default Login;

// ===============================
// 
import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import API from "../../utils/API";
import "./Login.css"

class Login extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    password: ""
  }

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  // Method to handle user login, should redirect to main page when done
  login = (e) => {
    e.preventDefault();
    API
      .login({username: this.state.username, password: this.state.password})
      .then(res => {
        console.log(res.data);
        console.log("logged in")
        this.setState({isLoggedIn: res.data})

      })
      .catch(err => console.log(err.response));
  }
  register = (e) => {
    e.preventDefault();
    
    API.register({username: this.state.username, password: this.state.password})
    .then(res => {
      console.log(res.data);
      console.log("registered successfully")

    })

  }

  render() {
    // If user is logged in, take them to main page
    if (this.state.isLoggedIn) {
      return <Redirect to="/guestlist"/>
    }

    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <form>
            <h3>Login!</h3>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Username"/>
              <small id="usernameHelp" className="form-text text-muted">Enter your username</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn btn-success" onClick={this.login}>Login</button>
            <button type="submit" className="btn btn-success" onClick={this.register}>Register</button>
          </form>

        </div>
      </div>
    )
  }
}

export default Login;
