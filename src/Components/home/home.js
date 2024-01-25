import React from "react";
import Navbar from "../navbar/navbar";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="dh2">
          <img
            className="img2"
            src="images\cityscape-skyline-chongqing-from-glass-window.jpg"
            alt=""
          />
        </div>

        <div className="row mt-5">
          <div className="col-md-6 dh3">
            <img
              className="img3"
              src="images/glass-window-overlooking-green-garden.jpg"
            />
          </div>
          <div className="col-md-6">
            <div className="dh3">
              <h2 className="th1 mt-5">About Us</h2>
              <hr />
              <p className="th2">
                Glassberry is an young and emerging Trader cum Service Provider
                Company for Architectural glass and Hardware, based in Cochin
                into the field of general trading and supply-cum-service in
                public as well as private sector all over India.
              </p>
              <button className="btn btn1 btn-dark">
                <a>More Info</a>
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="dh4">
            <h2 className="th3">Why Choose Us</h2>
          </div>
          <div className="col-md-3  mt-4 dh5">
            <h4 className="th4">Easy Fitting</h4>
            <hr />
            <p>
              Introducing our expert glass fitting service, where quality meets
              convenience. We specialize in seamless glass installations,
              ensuring your projects are not only stunning but also hassle-free.
              Trust us to bring your vision to life with precision and
              professionalism.
            </p>
          </div>
          <div className="col-md-3 mt-4 dh5">
            <h4 className="th4">Easy Fitting</h4>
            <hr />
            <p>
              Introducing our expert glass fitting service, where quality meets
              convenience. We specialize in seamless glass installations,
              ensuring your projects are not only stunning but also hassle-free.
              Trust us to bring your vision to life with precision and
              professionalism.
            </p>
          </div>
          <div className="col-md-3 mt-4 dh5">
            <h4 className="th4">Easy Fitting</h4>
            <hr />
            <p>
              Introducing our expert glass fitting service, where quality meets
              convenience. We specialize in seamless glass installations,
              ensuring your projects are not only stunning but also hassle-free.
              Trust us to bring your vision to life with precision and
              professionalism.
            </p>
          </div>
          <div className="col-md-3 mt-4 dh5">
            <h4 className="th4">Easy Fitting</h4>
            <hr />
            <p>
              Introducing our expert glass fitting service, where quality meets
              convenience. We specialize in seamless glass installations,
              ensuring your projects are not only stunning but also hassle-free.
              Trust us to bring your vision to life with precision and
              professionalism.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="dh4">
            <h2 className="th3">Our Services Include</h2>
          </div>

          <div className="col-md-4 dh6 mt-4">
            <div class="img-cont">
              <h2 className="th5">Home</h2>
              <img
                class="img3"
                src="images/vertical-shot-transparent-doors-commercial-building.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="col-md-4 dh6 mt-4">
            <div class="img-cont">
              <h2 className="th5">Office</h2>
              <img
                class="img3"
                src="images/city-square.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="col-md-4 dh6 mt-4">
            <div class="img-cont">
              <h2 className="th5">Hospital</h2>
              <img
                class="img3"
                src="images/transparent-elevator-underground-passage.jpg"
                alt=""
              />
            </div>
          </div>
          <button className="btn btn-dark mt-4 btn-md ">View More</button>
        </div>
      </div>
    </div>
  )
}

export default Home;
