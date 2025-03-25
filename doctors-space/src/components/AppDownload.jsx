import React from 'react';
import app from '../assets/play_store.png';
import './AppDownload.css';

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">{/* Add ID for scrolling */}
      <div className="app-download-links"> {/* Apply the app-download-links class here */}

        <a href="https://www.google.com/search?q=play+store&rlz=1C1VDKB_enIN1084IN1084&oq=PLAY&gs_lcrp=EgZjaHJvbWUqCggBEAAYsQMYgAQyDAgAEEUYORixAxiABDIKCAEQABixAxiABDIKCAIQABixAxiABDINCAMQABiDARixAxiABDIKCAQQABixAxiABDIKCAUQABixAxiABDINCAYQLhivARjHARiABDIGCAcQBRhA0gEIMzE3OGowajeoAgewAgHxBaAhW78gg9fK8QWgIVu_IIPXyg&sourceid=chrome&ie=UTF-8&sei=8-fhZ8rCFs6QseMP2Nqz4AE" target="_blank" rel="noopener noreferrer">
          <img src={app} alt="Download on Play Store" />
        </a>
        <p>Install Our App on playStore</p>
        {/* Add more download links as needed */}
      </div>
    </div>
  );
};

export default AppDownload;
