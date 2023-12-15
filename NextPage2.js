import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NextPage2.css";

const NextPage2 = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctorsData = async () => {
      try {
        const response = await axios.get("http://localhost:3003/doctors");
        setDoctorsData(response.data);
      } catch (error) {
        setError("Error fetching doctors data");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorsData();
  }, []);

  return (
    <>
      <h2>Our Doctors</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="nextpage2">
          {doctorsData.map((doctor) => (
            <div key={doctor.id} className="doctor-profile">
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p>Specialist: {doctor.specialist}</p>
                <p>Email: {doctor.email}</p>
                <p>Phone: {doctor.phone}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default NextPage2;
