import React, { useState, useEffect } from 'react';
import './ReachDoctor.css';
import './SearchSpecialists.css';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

import HospitalMap from "./HospitalMap";
import MedicineRecommendation from '../MedicineRecommendation/MedicineRecommendation';

const ReachDoctor = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searched, setSearched] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.length > 1) {
        fetchSuggestions(query);
      } else {
        setSuggestions([]);
        setShowDropdown(false);
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [query]);

  const fetchSuggestions = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=hospital+${encodeURIComponent(searchTerm)}&limit=5`,
        {
          headers: {
            'User-Agent': 'HospitalFinderApp (contact@example.com)',
          },
        }
      );
      const data = await response.json();
      setSuggestions(data);
      setShowDropdown(true);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const searchHospitals = async (searchText = query) => {
    if (!searchText) return;
    setLoading(true);
    setSearched(true);
    setSuggestions([]);
    setShowDropdown(false);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=hospital+${encodeURIComponent(searchText)}&extratags=1&namedetails=1`,
        {
          headers: {
            'User-Agent': 'HospitalFinderApp (contact@example.com)',
          }
        }
      );
      const data = await response.json();
      const filtered = data.filter(item =>
        item.extratags?.amenity === "hospital" ||
        item.display_name.toLowerCase().includes("hospital")
      );
      setHospitals(filtered);
    } catch (error) {
      console.error("Error fetching hospital data:", error);
    }
    setLoading(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.display_name);
    searchHospitals(suggestion.display_name);
    setShowDropdown(false);
  };

  const getNearbyHospitals = () => {
    setLoading(true);
    setSearched(true);
    setHospitals([]);
    setSuggestions([]);
    setShowDropdown(false);
    setLocationError(null);
  
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
  
        const delta = 0.05; // Smaller bounding box (~5km) to prioritize closer hospitals
        const viewbox = `${longitude - delta},${latitude + delta},${longitude + delta},${latitude - delta}`;
  
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=hospital&extratags=1&namedetails=1&limit=50&viewbox=${viewbox}&bounded=1`,
            {
              headers: {
                'User-Agent': 'HospitalFinderApp (contact@example.com)',
              },
            }
          );
  
          const data = await response.json();
          console.log(`Fetched ${data.length} hospitals.`);
  
          const withDistance = data.map((hospital) => {
            const distance = getDistanceFromLatLonInKm(
              latitude,
              longitude,
              parseFloat(hospital.lat),
              parseFloat(hospital.lon)
            );
            return { ...hospital, distance };
          });
  
          // Sort by distance and take the closest 10-15 hospitals
          const nearby = withDistance
            .sort((a, b) => a.distance - b.distance)
            .slice(0, 15); // Take the closest 15 hospitals regardless of distance
  
          setHospitals(nearby);
  
        } catch (error) {
          console.error("Error fetching nearby hospitals:", error);
        }
  
        setLoading(false);
      },
      (err) => {
        console.error("Location access denied:", err);
        setLocationError("Location access denied. Please allow access.");
        setLoading(false);
      }
    );
  };

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  return (
    <div className="reach-doctor-container">
      <NavBar />
      <main>
        <h1>Reach a Doctor</h1>

        <div className="search-container">
          <div className="hospital-search">
          <h2>Find Hospitals by Name or Location</h2>
          <input
            type="text"
            placeholder="Start typing hospital name or location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {
              if (suggestions.length > 0) setShowDropdown(true);
            }}
          />
          <div className="search-buttons">
            <button onClick={() => searchHospitals()}>Search</button>
            <button onClick={getNearbyHospitals}>Near Me</button>
          </div>

          {showDropdown && suggestions.length > 0 && (
            <ul className="suggestion-dropdown">
              {suggestions.map((s, i) => (
                <li key={i} onClick={() => handleSuggestionClick(s)}>
                  {s.display_name}
                </li>
              ))}
            </ul>
          )}

          {loading && <p>Loading hospitals...</p>}
          {locationError && <p className="error-msg">{locationError}</p>}

          <div className="hospital-list">
            {searched && hospitals.length === 0 && !loading && (
              <p>No hospitals found.</p>
            )}
            {hospitals.length > 0 && (
              <p>Showing {hospitals.length} hospitals:</p>
            )}
            {hospitals.map((hospital, index) => (
              <div key={index} className="hospital-card">
                <h4>{hospital.display_name}</h4>
                {hospital.distance && (
                  <p>Distance: {hospital.distance.toFixed(2)} km</p>
                )}
                <HospitalMap hospital={hospital} userLocation={userLocation} />
              </div>
            ))}
          </div>
          </div>
          <div className="specialists-column">
          <MedicineRecommendation/>
           
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReachDoctor;
