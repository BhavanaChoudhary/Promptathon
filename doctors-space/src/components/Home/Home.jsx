import React, { useState } from "react";
import Login from "../Login/Login";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import HomePage from "./HomePage";


const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (<>
    <div>
      <NavBar setShowLogin={setIsLoginOpen} />

      {isLoginOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
            <button className="close-btn" onClick={() => setIsLoginOpen(false)}>X</button>
          </div>
        </div>
      )}

    </div>
    <HomePage/>
    
    <Footer/>
    </>
  );
};

export default Home;
