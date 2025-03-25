import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'; // Ensure this is imported
// Import the LoginDoctor component
import Home from './components/Home/Home';
import BookInterview from './components/BookInterview/BookInterview'; // Import the BookInterview component
import DoctorPage from './components/DoctorPage'; // Import the DoctorPage component
import ViewAppointments from './components/ViewAppointments'; // Import the ViewAppointments component


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  // New state for LoginDoctor
  const [appointments, setAppointments] = useState([]); // State to store appointments

  return (
    <BrowserRouter>
      {showLogin ? <Login setShowLogin={setShowLogin} isOpen={showLogin} onClose={() => setShowLogin(false)} /> : null} {/* Pass isOpen and onClose */}
      
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book-interview' element={<BookInterview setAppointments={setAppointments} />} /> {/* Pass setAppointments to BookInterview */}
          
          <Route path='/view-appointments' element={<ViewAppointments appointments={appointments} />} />
 {/* Route for View Appointments */}
          <Route path='/doctors-page' element={<DoctorPage />} /> {/* Route for Doctor's Page */}
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
