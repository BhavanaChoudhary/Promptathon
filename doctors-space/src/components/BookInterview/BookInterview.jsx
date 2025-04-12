import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./BookInterview.css";

const BookPatient = ({ setPatients }) => {
  const [formData, setFormData] = useState({
    Email: "",
    FullName: "",
    DateOfBirth: "",
    Gender: "",
    BloodGroup: "",
    Weight: "",
    Height: "",
    BMI: "",
    BloodPressure: "",
  });

  useEffect(() => {
    const weight = parseFloat(formData.Weight);
    const heightCm = parseFloat(formData.Height);
    if (weight && heightCm) {
      const heightM = heightCm / 100;
      const bmi = (weight / (heightM * heightM)).toFixed(1);
      setFormData((prev) => ({ ...prev, BMI: bmi }));
    }
  }, [formData.Weight, formData.Height]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      Email: formData.Email,
      FullName: formData.FullName,
      DateOfBirth: formData.DateOfBirth,
      Gender: formData.Gender,
      BloodGroup: formData.BloodGroup,
      Vitals: {
        Weight: formData.Weight,
        Height: formData.Height,
        BMI: formData.BMI,
        BloodPressure: formData.BloodPressure,
      },
      MedicalProfile: {
        PreExistingConditions: [],
        Allergies: [],
        OngoingMedications: [],
      },
      MedicalVisits: [],
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}/api/book-appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to register patient");
      alert(data.message);

      if (setPatients) {
        setPatients((prev) => [...prev, { id: Date.now(), ...formattedData }]);
      }

      setFormData({
        Email: "",
        FullName: "",
        DateOfBirth: "",
        Gender: "",
        BloodGroup: "",
        Weight: "",
        Height: "",
        BMI: "",
        BloodPressure: "",
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
            <label>Email:</label>
            <input type="email" name="Email" value={formData.Email} onChange={handleChange} required />
          </div>
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
            <label>Weight (kg):</label>
            <input type="number" name="Weight" value={formData.Weight} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Height (cm):</label>
            <input type="number" name="Height" value={formData.Height} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>BMI (auto-calculated):</label>
            <input type="text" name="BMI" value={formData.BMI} readOnly />
          </div>
          <div className="form-group">
            <label>Blood Pressure (optional):</label>
            <input type="text" name="BloodPressure" value={formData.BloodPressure} onChange={handleChange} placeholder="e.g., 120/80" />
          </div>

          <button type="submit" className="submit-button">Register</button>
        </form>

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
