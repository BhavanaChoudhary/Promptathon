import React, { useState } from 'react';
import NavBarDoctor from './NavBar/NavBarDoctor'; // Import the NavBarDoctor component
import Footer from './Footer/Footer'; // Import the Footer component
import SignupPopup from './SignupPopup'; // Import the SignupPopup component
import "./DoctorPage.css";  // Ensure correct path

const DoctorPage = () => {
  const [showSignup, setShowSignup] = useState(false); // State to manage signup popup visibility


  return (
    <div>
      <NavBarDoctor />
      <h1>Welcome to the Doctor's Page</h1>
      <button onClick={() => setShowSignup(true)}>Open Signup</button> {/* Button to open signup popup */}
      <div className="button-container">
        <button className="card-button" onClick={() => window.open('/view-appointments', '_blank')}>
          View Appointments
        </button>
        <button className="card-button" onClick={() => window.open('https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/24/23/20250324230246-RS9GKMYW.json', '_blank')}>
          Assistant To Help Doctors
        </button>
      </div>

      <SignupPopup isOpen={showSignup} onClose={() => setShowSignup(false)} />

      <Footer />
    </div>
  );
};

export default DoctorPage;
