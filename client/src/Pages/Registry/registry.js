import React, { Component } from "react";
import perfectImg from "../images/perfect.png";

import "./registry.css";
// import dogpic from "./images/pups.jpg";

// const styles = {
//   cursive: {
//     // backgroundImage: `url(${dogpic})`,
//     // backgroundSize: "cover",
//     // backgroundPosition: "center",
//     // backgroundBlendMode: "multiply",
//     // // backgroundColor: "red",
//     // color: "white",
//     // textShadow: "0 0 10px black",
//     // minHeight: "45vh"
//   }
// };

class Registry extends Component {
  state = {};
  // shoppingSites = [
  //   {
  //     name:"potteryBarn",
  //     linkURL:"",
  //     imageURL""
  //   }
  // ]
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
                    src="https://www.logolynx.com/images/logolynx/eb/eb69ec763edf8991d8c87d9742aaf57f.jpeg"
                    alt="crate and barrel"
                  />
                  <div id="browse_app">
                    <a
                      className="btn btn-large btn-info shopbtn"
                      target="_blank"
                      href="https://www.crateandbarrel.com/gift-registry/registrant-list/5946439?GrId=5946439"
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
                  {/* <h1 className="article-title">Title of article</h1> */}
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
                {/* <article>
                  <img
                    className="article-img"
                    src="http://placekitten.com/280/250"
                    alt=" "
                  />
                  <h1 className="article-title">Title of article</h1>
                </article> */}
                {/* <article>
                  <img
                    className="article-img"
                    src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTc9BbC0ceryp4nX9q3ATk_EMbnQmCQw-QxsV_oEfKRcZHWi0UWBy7CdXxvyAok1nqr_XvgtjbRixq2CbNr5wA7oZwXWwKhOfjkkgz6mzESF4JiakhKa_eC&usqp=CAE"
                    alt=" "
                  />
                  <h1 className="article-title">Plates</h1>
                </article> */}
                {/* <article>
                  <img
                    className="article-img"
                    src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRgXOQQqjs0oHUvg6iBANtd23knfGGCS72H82wiqhQAOUehlJJNvuAjqdpvr8-v_q0YO90iibOWZTE3gX-TVnJUUxXztcr3fHVp5004YTzjuNFlh12uHglsXw&usqp=CAE"
                    alt=" "
                  />
                  <h1 className="article-title">Bedding</h1>
                </article> */}
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registry;
