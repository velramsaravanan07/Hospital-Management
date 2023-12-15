import React, { useState } from "react";
import Patient from "./Patient";
import Doctor from "./Doctor";
import Home from "./Home";
import BookAppointment from "./BookAppointment";
import "./Top.css";
import image from "./images/icon-3.png";

const Top = () => {
  const [selectedSection, setSelectedSection] = useState("home");
  const [showAppointment, setShowAppointment] = useState(false);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const goToHome = () => {
    setSelectedSection("home");
  };

  const handleDoctorEvent = () => {
    console.log("Doctor event handled");
  };

  const handlePatientEvent = () => {
    console.log("Patient event handled");
  };

  const doctorDetails = {};

  const patientDetails = {};

  const handleBookAppointment = () => {
    setSelectedSection("appointment");
    setShowAppointment(true);
  };

  const closeAppointmentModal = () => {
    setShowAppointment(false);
  };

  return (
    <div className="container">
      <div className="navbar">
        <h1>
          {" "}
          <img src={image} alt="Hospital" className="logo-image" />
          LifeSpring Hospital
        </h1>
        <button onClick={() => handleSectionChange("home")}>Home</button>
        <button onClick={() => handleSectionChange("doctor")}>
          Doctors Details
        </button>
        <button onClick={() => handleSectionChange("patient")}>
          Patients Details
        </button>
        <button onClick={() => handleSectionChange("appointment")}>
          Book Appointment
        </button>
      </div>

      {selectedSection === "home" && <Home />}
      {selectedSection === "doctor" && (
        <>
          <h1 className="details">Doctors Details</h1>
          <Doctor details={doctorDetails} onEvent={handleDoctorEvent} />
        </>
      )}
      {selectedSection === "patient" && (
        <>
          <h1 className="details">Patients Details</h1>
          <Patient details={patientDetails} onEvent={handlePatientEvent} />
          <button onClick={handleBookAppointment}>Book Appointment</button>
          {showAppointment && (
            <BookAppointment onClose={closeAppointmentModal} />
          )}
        </>
      )}
      {selectedSection === "appointment" && (
        <>
          <h1 className="details">Book Appointment</h1>
          <BookAppointment onClose={closeAppointmentModal} />
        </>
      )}
         
      {selectedSection === "home" && <div className="website-content"></div>}
    </div>
  );
};

export default Top;

