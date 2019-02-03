import React, { Component } from "react";
import perfectImg from "../images/perfect.png";

import "./registry.css";
// import dogpic from "./images/pups.jpg";

class Registry extends Component {
  state = {};

  render() {
    return (
      <div>
        <div
          className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center"
          // style={styles.cursive}
        >
          <h1 className="display-4">Thank You Kindly</h1>
          {/* <p>Looking to meet your next best friend?</p> */}

          <p>
            <img id="img" src={perfectImg} alt="heart" />
          </p>
        </div>
        <br />
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <section className="cards">
                <article>
                  <img
                    className="article-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijbIiwvJZP0LGPh8HTfxielaJBilo10DhFMlZ20UUYpDWJ0V4"
                    alt="crate and barrel"
                  />
                  <div id="browse_app">
                    <a
                      className="btn btn-large btn-info shopbtn"
                      target="_blank"
                      href="https://www.macys.com/wgl/registry/guest/7039599"
                    >
                      SHOP
                    </a>
                  </div>{" "}
                </article>
                <article>
                  <img
                    className="article-img"
                    src="https://g.foolcdn.com/art/companylogos/square/BBBY.png"
                    alt=" "
                  />
                  <div id="browse_app">
                    <a
                      className="btn btn-large btn-info shopbtn"
                      target="_blank"
                      href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/547133835"
                      alt="Bed Bath Beyond"
                    >
                      SHOP
                    </a>
                  </div>
                </article>
                <article>
                  <img
                    className="article-img"
                    src="https://pmcdeadline2.files.wordpress.com/2015/08/amazon-featured-image.jpg?w=446&h=299&crop=1"
                    alt=" "
                  />
                  <div id="browse_app">
                    <a
                      className="btn btn-large btn-info shopbtn"
                      target="_blank"
                      href="https://www.amazon.com/wedding/organize-registry?ref_=wedding_subnav"
                      alt="amazon"
                    >
                      SHOP
                    </a>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registry;
