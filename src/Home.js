// Home.js
import React from "react";
import images from "./images/white.png";
import heroBanner from "./images/hero-banner.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <div className="overlay"></div>
        <img src={images} alt="Hospital" className="background-image" />
        <img src={heroBanner} alt="Hero Banner" className="hero-banner" />

        <p className="overlay-text">
          <h1>Welcome to LifeSpring Hospital...</h1>
          At LifeSpring Hospital, we're dedicated to providing exemplary
          healthcare services with a focus on your well-being. As a premier
          medical institution, we combine cutting-edge technology, a
          compassionate team, and a commitment to excellence to ensure your
          health journey is in the best hands.
        </p>
      </div>
    </div>
  );
};

export default Home;
