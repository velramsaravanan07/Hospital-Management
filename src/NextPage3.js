// NextPage3.js
import React, { useState } from "react";
import "./NextPage3.css";

const diseasesData = [
  {
    id: 1,
    name: "Heart Disease",
    cause:
      "Caused by factors such as high blood pressure, smoking, and unhealthy diet.",
    treatment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
  },
  {
    id: 2,
    name: "Diabetes",
    cause:
      "Caused by the body not producing enough insulin or cells not responding to insulin.",
    treatment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
  },
  {
    id: 3,
    name: "Cancer",
    cause:
      "Caused by uncontrolled cell growth and the ability of these cells to invade other tissues.",
    treatment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
  },
  // Add more diseases as needed
];

const NextPage3 = () => {
  const [expandedDiseases, setExpandedDiseases] = useState({});

  const handleLearnMoreClick = (diseaseId) => {
    setExpandedDiseases((prevExpanded) => ({
      ...prevExpanded,
      [diseaseId]: !prevExpanded[diseaseId],
    }));
  };

  return (
    <div className="nextpage3">
      <div className="specialities-container">
        <h2>Our Specialities...</h2>
        <p className="para">
          Our aim is to deliver state-of-the-art medical care. We are committed
          to providing the best patient care and welcome the opportunity to
          serve you and your family. At our clinic, we prioritize your health
          and well-being. Our team of experienced and dedicated medical
          professionals ensures that you receive personalized care tailored to
          your unique needs.
        </p>
      </div>
      <div className="disease-cards-container">
        {diseasesData.map((disease) => (
          <div key={disease.id} className="disease-card">
            <h3>{disease.name}</h3>
            {expandedDiseases[disease.id] && (
              <div>
                <div className="treatment-details cause-details">
                  <p>
                    <strong>Cause:</strong> {disease.cause}
                  </p>
                </div>
                <div className="treatment-details">
                  <p>
                    <strong>Treatment:</strong> {disease.treatment}
                  </p>
                </div>
              </div>
            )}
            <button
              className="learnmore"
              onClick={() => handleLearnMoreClick(disease.id)}
            >
              {expandedDiseases[disease.id] ? "Show Less" : "Learn More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextPage3;
