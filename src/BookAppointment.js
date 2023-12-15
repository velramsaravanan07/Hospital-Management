import React, { useState } from "react";
import "./BookAppointment.css";

const AppointmentForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    patientEmail: "",
    patientMobile: "",
    appointmentDate: "",
    appointmentTime: "morning",
    patientProblem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3003/patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Appointment booked successfully!");

        setFormData({
          patientName: "",
          patientEmail: "",
          patientMobile: "",
          appointmentDate: "",
          appointmentTime: "morning",
          patientProblem: "",
        });

        onClose();
      } else {
        console.error("Failed to book appointment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="patientName">Patient Name:</label>
      <input
        type="text"
        id="patientName"
        name="patientName"
        value={formData.patientName}
        onChange={handleChange}
        required
      />

      <label htmlFor="patientEmail">Patient Email:</label>
      <input
        type="email"
        id="patientEmail"
        name="patientEmail"
        value={formData.patientEmail}
        onChange={handleChange}
        required
      />

      <label htmlFor="patientMobile">Patient Mobile:</label>
      <input
        type="tel"
        id="patientMobile"
        name="patientMobile"
        value={formData.patientMobile}
        onChange={handleChange}
        required
      />

      <label htmlFor="appointmentDate">Appointment Date:</label>
      <input
        type="date"
        id="appointmentDate"
        name="appointmentDate"
        value={formData.appointmentDate}
        onChange={handleChange}
        required
      />

      <label htmlFor="appointmentTime">Appointment Time:</label>
      <select
        id="appointmentTime"
        name="appointmentTime"
        value={formData.appointmentTime}
        onChange={handleChange}
        required
      >
        <option value="morning">Morning</option>
        <option value="afternoon">Afternoon</option>
        <option value="evening">Evening</option>
      </select>

      <label htmlFor="patientProblem">Patient Problem:</label>
      <textarea
        id="patientProblem"
        name="patientProblem"
        value={formData.patientProblem}
        onChange={handleChange}
        required
      />

      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;
