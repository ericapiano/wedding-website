import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Menu from "./dropdown.js";

const styles = {
  villan: {
    // backgroundColor: "rgb(52, 161, 244)",
    color: "black"
  },
  navLink: {
    color: "black"
  }
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg " style={styles.villan}>
      <Link to="/" className="navbar-brand" style={styles.navLink}>
        {/* Wedding Website */}
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav nav-animate">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={styles.navLink}
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Menu
              title="About"
              text1="The Couple"
              text2="The Bridal Party"
              link1="/about-couple"
              link2="/about-party"
            />
          </li>

          <li className="nav-item">
            <Link
              to="/RSVP"
              className={
                window.location.pathname === "/RSVP"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={styles.navLink}
            >
              RSVP
            </Link>
          </li>

          {/* <li className="nav-item">
            <Menu
              text2="directions"
              title="Events"
              link1="/accomodations"
              link2="/directions"
            />
          </li> */}
          <li className="nav-item">
            <Link
              to="/registry"
              className={
                window.location.pathname === "/registry"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={styles.navLink}
            >
              Registry
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/events"
              className={
                window.location.pathname === "/events"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={styles.navLink}
            >
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={
                window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={styles.navLink}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
