import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './BookInterview.css';

const BookInterview = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    problemDescription: '',
    patientHistory: '',
    condition: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:6000/api/book-appointment", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to book appointment");
    }
  };

  return (
    <div>
      <NavBar />
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="30" required />
        </div>
        <div>
          <label>Problem Description:</label>
          <textarea name="problemDescription" value={formData.problemDescription} onChange={handleChange} placeholder="Severe headache" required />
        </div>
        <div>
          <label>Patient History:</label>
          <textarea name="patientHistory" value={formData.patientHistory} onChange={handleChange} placeholder="No previous surgeries, allergic to penicillin" required />
        </div>
        <div>
          <label>Condition:</label>
          <textarea name="condition" value={formData.condition} onChange={handleChange} placeholder="Chronic migraine" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default BookInterview;
