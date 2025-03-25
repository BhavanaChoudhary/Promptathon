import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./BookInterview.css";

const BookPatient = ({ setPatients }) => {
  const [formData, setFormData] = useState({
    FullName: "",
    DateOfBirth: "",
    Gender: "",
    BloodGroup: "",
    PreExistingConditions: "",
    Allergies: "",
    OngoingMedications: "",
    Symptoms: "",
    Diagnosis: "",
    Prescriptions: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);

    // ✅ Ensure fields are correctly formatted before sending
    const formattedData = {
      FullName: formData.FullName,
      DateOfBirth: formData.DateOfBirth,
      Gender: formData.Gender,
      BloodGroup: formData.BloodGroup,
      MedicalProfile: {
        PreExistingConditions: formData.PreExistingConditions ? formData.PreExistingConditions.split(",").map(s => s.trim()).filter(Boolean) : [],
        Allergies: formData.Allergies ? formData.Allergies.split(",").map(s => s.trim()).filter(Boolean) : [],
        OngoingMedications: formData.OngoingMedications
          ? formData.OngoingMedications.split(",").map(med => med.trim()).filter(Boolean).map(med => ({ MedicineName: med }))
          : [],
      },
      MedicalVisits: [
        {
          VisitName: "Initial Visit",
          Date: new Date().toISOString().split("T")[0], // Current date
          Symptoms: formData.Symptoms ? formData.Symptoms.split(",").map(s => s.trim()).filter(Boolean) : [],
          Diagnosis: formData.Diagnosis,
          Prescriptions: formData.Prescriptions
            ? formData.Prescriptions.split(",").map(med => med.trim()).filter(Boolean).map(med => ({ Medicine: med }))
            : [],
        },
      ],
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}/api/book-appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (!response.ok) {
        throw new Error(data.error || "Failed to register patient");
      }

      alert(data.message);

      // ✅ Update patient list safely
      if (setPatients) {
        setPatients(prev => [...prev, { id: Date.now(), ...formattedData }]);
      }

      // ✅ Reset form fields
      setFormData({
        FullName: "",
        DateOfBirth: "",
        Gender: "",
        BloodGroup: "",
        PreExistingConditions: "",
        Allergies: "",
        OngoingMedications: "",
        Symptoms: "",
        Diagnosis: "",
        Prescriptions: "",
      });

    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "Failed to register patient");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <h1>Register a Patient</h1>
        <form onSubmit={handleSubmit} className="patient-form">
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" name="FullName" value={formData.FullName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="date" name="DateOfBirth" value={formData.DateOfBirth} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select name="Gender" value={formData.Gender} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Blood Group:</label>
            <input type="text" name="BloodGroup" value={formData.BloodGroup} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Pre-existing Conditions (comma-separated):</label>
            <input type="text" name="PreExistingConditions" value={formData.PreExistingConditions} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Allergies (comma-separated):</label>
            <input type="text" name="Allergies" value={formData.Allergies} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Ongoing Medications (comma-separated):</label>
            <input type="text" name="OngoingMedications" value={formData.OngoingMedications} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Symptoms (comma-separated):</label>
            <input type="text" name="Symptoms" value={formData.Symptoms} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Diagnosis:</label>
            <textarea name="Diagnosis" value={formData.Diagnosis} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Prescriptions (comma-separated):</label>
            <input type="text" name="Prescriptions" value={formData.Prescriptions} onChange={handleChange} />
          </div>
          <button type="submit" className="submit-button">Register</button>
        </form>

        {/* ✅ Live Data Preview */}
        <div className="form-preview">
          <h2>Entered Information</h2>
          <ul>
            {Object.entries(formData).map(([field, value]) => (
              <li key={field}>
                <strong>{field.replace(/([A-Z])/g, " $1")}: </strong> {value || "Not provided"}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookPatient;
