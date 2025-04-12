import React, { useState, useEffect } from 'react';
import './BlinkingPopup.css';

const BlinkingPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 1000); // Blink every 1 second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`blinking-popup ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="popup-content">
        <span className="popup-text">Scanalyze</span>
      </div>
    </div>
  );
};

export default BlinkingPopup;
