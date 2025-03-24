import React from 'react';
import './HomePage.css'; // Keep styles separate
import videoBg from '../../assets/video.mp4';

// Importing images from assets folder
import img1 from '../../assets/feature1.png';
import img2 from '../../assets/feature2.png';
import img3 from '../../assets/feature3.png';
import img4 from '../../assets/feature4.png';

const featuresData = [
  {
    id: 1,
    title: 'Rx within 30 seconds',
    description:
      'Generate Digital Prescription in less than 30 seconds with AI tools and templates.',
    icon: '🟨',
    image: img1,
  },
  {
    id: 2,
    title: 'Centralized Patient Records',
    description:
      'Say goodbye to paper-based record-keeping. Our EMR software stores all patient data securely.',
    icon: '⚙️',
    image: img2,
  },
  {
    id: 3,
    title: 'Integrate with Partner Lab',
    description:
      'Integrate your partner lab with one click for better diagnostic services.',
    icon: '🟪',
    image: img3,
  },
  {
    id: 4,
    title: 'More Digital Presence on Internet',
    description:
      'Increase Google reviews by 10X with personalized video messages for feedback.',
    icon: '🟨',
    image: img4,
  },
];

import Login from '../Login/Login'; // Import the Login component




const HomePage = () => {
  return (
    <div className="home-page">
      {/* Background Video */}
      <video autoPlay loop muted className="video-background">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Quote Overlay */}
      <div className="quote-overlay">
        <h1>Transforming healthcare with technology</h1>
      </div>

      {/* Login Section */}
      <div className="sign-up-section">
        <Login />
      </div>



      {/* Features Section */}
      <div className="features-section">
        <h2 className="features-title">Key Features</h2>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-item ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
            >
              <div className="feature-image">
                <img src={feature.image} alt={feature.title} />
              </div>
              <div className="feature-content">
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
