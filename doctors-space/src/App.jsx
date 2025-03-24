import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'; // Ensure this is imported
import Home from './components/Home/Home';
import BookInterview from './components/BookInterview/BookInterview'; // Import the BookInterview component

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <BrowserRouter>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : null}
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book-interview' element={<BookInterview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
