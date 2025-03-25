import React, { useState, useEffect } from "react";
import NavBarDoctor from "./NavBar/NavBarDoctor";
import Footer from "./Footer/Footer";
import "./ViewAppointments.css"; // Ensure you have styles

const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Loading state
  const [error, setError] = useState(null); // ✅ Error handling

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"; // ✅ Fallback URL

        const response = await fetch(`${BACKEND_URL}/api/appointments`);
        if (!response.ok) throw new Error("Failed to fetch appointments");

        const data = await response.json();
        console.log("Fetched appointments:", data); // ✅ Debugging log
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <>
      <NavBarDoctor />
      <div className="appointments-container">
        <h2>Appointments List</h2>

        {loading && <p>Loading appointments...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {!loading && !error && appointments.length === 0 && <p>No appointments yet</p>}

        {!loading && !error && appointments.length > 0 && (
          appointments.map((appointment) => (
            <div key={appointment._id} className="appointment-card">
              <h3>{appointment.FullName}, {appointment.DateOfBirth}</h3>
              <p><strong>Gender:</strong> {appointment.Gender}</p>
              <p><strong>Blood Group:</strong> {appointment.BloodGroup}</p>

              {/* Medical Profile */}
              <h4>Medical Profile:</h4>
              <p><strong>Pre-existing Conditions:</strong> {appointment.MedicalProfile?.PreExistingConditions?.join(", ") || "None"}</p>
              <p><strong>Allergies:</strong> {appointment.MedicalProfile?.Allergies?.join(", ") || "None"}</p>
              <p><strong>Ongoing Medications:</strong> {appointment.MedicalProfile?.OngoingMedications?.map(med => med.MedicineName).join(", ") || "None"}</p>

              {/* Medical Visits */}
              {appointment.MedicalVisits && appointment.MedicalVisits.length > 0 && (
                <>
                  <h4>Last Visit:</h4>
                  <p><strong>Visit Date:</strong> {appointment.MedicalVisits[0].Date}</p>
                  <p><strong>Symptoms:</strong> {appointment.MedicalVisits[0].Symptoms?.join(", ") || "None"}</p>
                  <p><strong>Diagnosis:</strong> {appointment.MedicalVisits[0].Diagnosis || "Not provided"}</p>
                  <p><strong>Prescriptions:</strong> {appointment.MedicalVisits[0].Prescriptions?.map(p => p.Medicine).join(", ") || "None"}</p>
                </>
              )}
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default ViewAppointments;
