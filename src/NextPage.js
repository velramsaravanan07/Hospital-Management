import React from "react";
import locationImage from "./images/location.png";
import "./NextPage.css";

const NextPageComponent = () => {
  return (
    <div className="nextpage">
      <img src={locationImage} alt="Hero Banner" className="world" />
      <div className="text">
        <h2>Locations..</h2>
        <p> </p>
        <p>
          <span className="number">150+ </span>Eye hospitals
        </p>
        <p>
          <span className="number">10 </span> Countries
        </p>
        <p>
          A team of <span className="number">500+ </span> doctors
        </p>
      </div>
    </div>
  );
};

export default NextPageComponent;
