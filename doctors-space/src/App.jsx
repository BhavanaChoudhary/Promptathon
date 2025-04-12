import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import BookInterview from './components/BookInterview/BookInterview';
import DoctorPage from './components/DoctorPage';
import ViewAppointments from './components/ViewAppointments';
import ReachDoctor from './components/ReachDoctor/ReachDoctor';
import VoiceAssistant from './components/VoiceAssistant/VoiceAssistant';
 


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <VoiceAssistant />
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book-interview' element={<BookInterview setAppointments={setAppointments} />} />
          <Route path='/view-appointments' element={<ViewAppointments appointments={appointments} />} />
          <Route path='/doctors-page' element={<DoctorPage />} />
          <Route path='/reach-doctor' element={<ReachDoctor />} />
        </Routes>
       </div>
       
    </BrowserRouter>
  );
}

export default App;
