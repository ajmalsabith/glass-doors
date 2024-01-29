import React from "react";
import Navbar from "../navbar/navbar";
import "./about.css";

function About() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="da1 mt-4">
          <h2 className="ta1">About M&B Remodeling</h2>
          <hr />
          <p className="ta2 mt-4">
            At [Your Company Name], we take pride in offering exceptional glass
            services. We are a licensed and insured glass company, which means
            you can have confidence in the quality of our work and the safety of
            your projects. Our team of experienced professionals is fully
            licensed, guaranteeing their expertise and qualifications.
            Additionally, we are insured to provide you with added peace of
            mind. In the rare event of any unforeseen circumstances, your
            investment is protected. Choose [Your Company Name] for all your
            glass needs, knowing you're in the hands of a trusted and
            responsible partner.
          </p>
        </div>
        <div className="da2 mt-2">
          <img
            className="img5"
            src="images/living-room-with-couch-coffee-table-couch.jpg"
          />
        </div>
        <div className="da1 mt-2">
          <h2 className="ta1">Our Procces</h2>
          <hr />
          <p className="ta2 mt-4">
            We understand that your glass installations are not just investments
            in aesthetics but also in safety and quality. That's why our team of
            licensed professionals is here to ensure your projects are executed
            flawlessly, meeting all industry standards and regulations.
            Moreover, we go the extra mile by offering insurance coverage for
            your peace of mind. Our commitment to transparency, professionalism,
            and protection sets us apart as the go-to choice for all your glass
            needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
