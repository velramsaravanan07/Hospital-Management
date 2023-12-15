// NextPage4.js
import React from "react";
import "./NextPage4.css";
import image1 from "./images/number1.png";
import image2 from "./images/number2.png";
import image3 from "./images/number3.png";
import image4 from "./images/number4.png";

const NextPage4 = () => {
  return (
    <>
      <h2>Why LifeSpring Hospital?</h2>
      <div className="nextpage4">
        <div className="point">
          <h4>
            <img src={image1} alt="number" className="number" /> TEAM OF OVER
            500 HIGHLY EXPERIENCED DOCTORS
          </h4>
          <p>
            When you visit any of our hospitals, you have the collective
            experience of over 400+ doctors backing your treatments.
          </p>
        </div>
        <div className="point">
          <h4>
            <img src={image2} alt="number" className="number" /> WORLD CLASS
            TECHNOLOGY & TECHNICAL TEAM
          </h4>
          <p>
            We are the pioneers when it comes to introducing the latest in
            Ophthalmic medical technology in India & Africa.
          </p>
        </div>
        <div className="point">
          <h4>
            <img src={image3} alt="number" className="number" /> PERSONALIZED
            CARE
          </h4>
          <p>
            One thing that has not changed in the last 60 years: individual,
            personalized care for everyone.
          </p>
        </div>
        <div className="point">
          <h4>
            <img src={image4} alt="number" className="number" /> THOUGHT
            LEADERSHIP IN OPHTHALMOLOGY
          </h4>
          <p>
            With numerous inventions and surgical techniques developed in-house,
            we are active contributors to the field of Ophthalmology.
          </p>
        </div>
      </div>
    </>
  );
};

export default NextPage4;
