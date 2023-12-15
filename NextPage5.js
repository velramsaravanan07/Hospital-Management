// NextPage5.js
import React from "react";
import "./NextPage5.css";
import logo1 from "./images/achs-logo1.jpg";
import logo2 from "./images/logo-2.jpg";
import logo3 from "./images/logo-3.jpg";
import logo4 from "./images/logo-5.jpg";

const NextPage5 = () => {
  return (
    <div className="nextpage5">
      <h1>Accreditation</h1>
      <div className="accreditation-point">
        <img src={logo1} alt="logo" className="logo" />
        <img src={logo2} alt="logo" className="logo" />
        <img src={logo3} alt="logo" className="logo" />
        <img src={logo4} alt="logo" className="logo" />
      </div>
    </div>
  );
};

export default NextPage5;
