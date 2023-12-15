// Footer.js

import React from "react";
import "./Footer.css"; // Don't forget to create and import your Footer.css for styling
import fb from "./images/facebook.png";
import insta from "./images/instagram.png";
import whatsapp from "./images/whatsapp.png";
import link from "./images/linkedin.png";
import twit from "./images/twitter.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="hospital-list">
          <h4>Hospitals - State & UT</h4>
          <li>Tamil Nadu</li>
          <li>Karnataka</li>
          <li>Maharashtra</li>
          <li>Kerala</li>
          <li>West Bengal</li>
          <li>Odisha</li>
          <li>Andhra Pradesh</li>
          <li>Telangana</li>
          <li>Puducherry</li>
          <li>Gujarat</li>
          <li>Rajasthan</li>
          <li>Madhya Pradesh</li>
          <li>Punjab</li>
          <li>Jammu & Kashmir</li>
          <li>All Eye Hospitals</li>
        </div>

        <div className="hospital-list">
          <h4>Hospitals - City</h4>
          <li>Chennai</li>
          <li>Bangalore</li>
          <li>Mumbai</li>
          <li>Pune</li>
          <li>Hyderabad</li>
          <li>Coimbatore</li>
          <li>Bhubaneswar</li>
          <li>Kolkata</li>
          <li>Indore</li>
          <li>Cuttack</li>
          <li>Ahmedabad</li>
          <li>Accra</li>
          <li>Nairobi</li>
        </div>

        <div className="contact-info">
          <h4>CONTACT US</h4>
          <p>Ph: +91 471 294 1400</p>
          <p>Email: feedback.tvm@kimshealth.org</p>

          <h4>EMERGENCY</h4>
          <p>Ph: +91 471 294 1101</p>

          <h4>CORPORATE ENQUIRIES</h4>
          <p>Ph: +91 471 294 1378</p>
        </div>

        <div className="social-media">
          <img src={fb} alt="icon" className="icon" />
          <img src={insta} alt="icon" className="icon" />
          <img src={whatsapp} alt="icon" className="icon" />
          <img src={link} alt="icon" className="icon" />
          <img src={twit} alt="icon" className="icon" />
        </div>
      </div>
      <p className="reserved">©2023 - LifeSpring | All right reserved</p>
    </>
  );
};

export default Footer;
