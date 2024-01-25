import React from "react";
import Navbar from "../navbar/navbar";
import { FaQuoteRight } from "react-icons/fa";
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
            <h4 className="th4">Free, At Home
            Services</h4>
            <hr />
            <p>
            Experience the convenience of our free, at-home glass services. We bring our expertise right to your doorstep, ensuring your glass needs are met with ease and without any additional cost
            </p>
          </div>
          <div className="col-md-3 mt-4 dh5">
            <h4 className="th4">
            Award Winning
            Service</h4>
            <hr />
            <p>
            We take pride in our industry-recognized excellence, delivering top-quality solutions that have earned us acclaim. Choose us for your glass needs, and experience the difference that comes with an award-winning touch
            </p>
          </div>
          <div className="col-md-3 mt-4 dh5">
            <h4 className="th4">Licensed &
            Insured</h4>
            <hr />
            <p>
            We prioritize your peace of mind by ensuring that our professionals are qualified and our work is fully protected. Your satisfaction and security are our top priorities.
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
                class="img4"
                src="images/vertical-shot-transparent-doors-commercial-building.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="col-md-4 dh6 mt-4">
            <div class="img-cont">
              <h2 className="th5">Office</h2>
              <img class="img4" src="images/city-square.jpg" alt="" />
            </div>
          </div>

          <div className="col-md-4 dh6 mt-4">
            <div class="img-cont">
              <h2 className="th5">Hospital</h2>
              <img
                class="img4"
                src="images/transparent-elevator-underground-passage.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="d-flex align-item-center justify-content-center">
          <button className="btn btn2 btn-dark mt-5 btn-md ">View More</button>
        </div>
        <div className="row dh7 mt-5">
          <div className="dh4">
            <h2 className="th3">Satisfied Customers</h2>
          </div>
          <div className="col-md-4 dh8 mt-4">
          <FaQuoteRight className="faquote mb-2" />
          <p>
            ensuring your projects are not only stunning but also hassle-free.
            Trust us to bring your vision to life with precision and
            professionalism.
          </p>
          <h4 className="th4">ajfan uk</h4>
          </div>
          <div className="col-md-4 dh8 mt-4">
          <FaQuoteRight className="faquote mb-2" />
          <p>
            ensuring your projects are not only stunning but also hassle-free.
            Trust us to bring your vision to life with precision and
            professionalism.
          </p>
          <h4 className="th4">suhail p</h4>
          </div>
          <div className="col-md-4 dh8 mt-4">
          <FaQuoteRight className="faquote mb-2" />
          <p>
            ensuring your projects are not only stunning but also hassle-free.
            Trust us to bring your vision to life with precision and
            professionalism.
          </p>
          <h4 className="th4">arun m</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
