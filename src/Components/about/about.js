import React from "react";
import Navbar from "../navbar/navbar";
import "./about.css";
import Footer from "../footer/footer";

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
          <div className="row mt-5 da4">
            <div className="col-md-3 mt-2 ">
              <img
                className="img6"
                src="images/beautiful-view-blue-lake-captured-from-inside-villa_181624-10734.jpg"
              />
            </div>
            <div className="col-md-3 mt-2 da3">
              <h4 className="text-center mt-4 ta3">Initial Consultation</h4><hr/>
              <ul>
                <li>We'll provide you with a detailed estimate based on the consultation.</li>
                <li>Our experts will discuss your glass project needs and requirements.</li>
                <li>Contact us to schedule an initial consultation.</li>
              </ul>
            </div>

            <div className="col-md-3 mt-2 ">
              <img
                className="img6"
                src="images/transparent-elevator-underground-passage.jpg"
              />
            </div>
            <div className="col-md-3 mt-2 da3">
              <h4 className="text-center mt-4 ta3">Customized Planning</h4><hr/>
              <ul>
              <li>Any necessary permits and regulations will be addressed during this phase.</li>
              <li>We'll consider design preferences, materials, and project timelines.</li>
              <li>Our team will work closely with you to create a customized plan.</li>
            </ul>
            </div>
            <div className="col-md-3 mt-2 ">
              <img
                className="img6"
                src="images/vertical-shot-transparent-doors-commercial-building.jpg"
              />
            </div>
            <div className="col-md-3 mt-2 da3">
              <h4 className="text-center mt-4 ta3">Professional Installation</h4><hr/>
              <ul>
                <li>Your project will be completed with precision and attention to detail.</li>
                <li>We use top-quality materials and employ industry best practices.</li>
                <li>Our licensed professionals will arrive on-site for the installation.</li>
              </ul>
            </div>

            <div className="col-md-3 mt-2 ">
              <img
                className="img6"
                src="images/white-hallway-with-glass-doors-metal-ceiling-modern-building.jpg"
              />
            </div>
            <div className="col-md-3 mt-2 da3">
              <h4 className="text-center mt-4 ta3">Final Delivery</h4><hr/>
              <ul>
              <li>We're here to answer any questions or provide ongoing support as needed.</li>
              <li>You can enjoy the benefits of our licensed and insured services worry-free.</li>
              <li>Upon completion and approval, we hand over your beautifully finished glass project.</li>
            </ul>
            </div>
          </div>
        </div>
        <div className="da1 mt-4">
        <h2 className="ta1">Our Quality Guarantee</h2>
        <hr />
        <p className="ta2 mt-4">
        Quality Guarantee: At [Your Company Name], we stand by the excellence of our workmanship and materials. We are dedicated to delivering glass solutions of the highest quality, and we back our commitment with a comprehensive Quality Guarantee. This means that every project we undertake is executed with precision, utilizing top-quality materials and industry-best practices. We take pride in our licensed professionals who bring their expertise to every installation, ensuring your satisfaction.

        If, by any chance, you encounter an issue with our workmanship or materials, we are here to make it right. Our Quality Guarantee ensures that any necessary adjustments or corrections will be promptly addressed, at no additional cost to you. Your peace of mind is of utmost importance to us, and we are fully committed to ensuring that every glass project we undertake not only meets but exceeds your expectations.
        
        Choose [Your Company Name] for a glass service that not only meets the highest standards but also offers the assurance of our Quality Guarantee. Your trust in us is our greatest reward, and we look forward to providing you with exceptional results, backed by our unwavering commitment to quality.
        </p>
        </div>
        <div className="da5 mt-4">
           <h4 className="ta5">Create your dream home
           Tell us about <h4 className="ta6">your project today  <br/>  <button className=" btn btn1 btn-dark mt-4">
           <a>More Info</a>
         </button></h4></h4>
         
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
