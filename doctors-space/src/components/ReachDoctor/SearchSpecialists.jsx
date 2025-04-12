import React, { useState } from 'react';
import './SearchSpecialists.css';

const SearchSpecialists = () => {
  const [specialty, setSpecialty] = useState('');
  const [availability, setAvailability] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Mock data for specialists
  const mockSpecialists = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      availability: 'Mon, Wed, Fri',
      rating: 4.8,
      hospital: 'City General Hospital'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      availability: 'Tue, Thu',
      rating: 4.6,
      hospital: 'Metro Medical Center'
    },
    {
      id: 3,
      name: 'Dr. Emily Wilson',
      specialty: 'Pediatrics',
      availability: 'Mon-Fri',
      rating: 4.9,
      hospital: 'Children\'s Hospital'
    },
    {
      id: 4,
      name: 'Dr. Robert Davis',
      specialty: 'Orthopedics',
      availability: 'Wed, Thu, Sat',
      rating: 4.7,
      hospital: 'Sports Medicine Institute'
    }
  ];

  const searchSpecialists = () => {
    setLoading(true);
    // Simulate API call with timeout
    setTimeout(() => {
      const results = mockSpecialists.filter(spec => {
        const matchesSpecialty = specialty ? spec.specialty.toLowerCase().includes(specialty.toLowerCase()) : true;
        const matchesAvailability = availability ? spec.availability.toLowerCase().includes(availability.toLowerCase()) : true;
        return matchesSpecialty && matchesAvailability;
      });
      setSearchResults(results);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="specialists-search">
      <h2>Find Medical Specialists</h2>
      <div className="search-filters">
        <input
          type="text"
          placeholder="Specialty (e.g. Cardiology)"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />
        <input
          type="text"
          placeholder="Availability (e.g. Mon-Fri)"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        />
        <button onClick={searchSpecialists}>Search</button>
      </div>

      {loading && <p>Searching specialists...</p>}

      <div className="specialists-list">
        {searchResults.length > 0 ? (
          searchResults.map(specialist => (
            <div key={specialist.id} className="specialist-card">
              <h4>{specialist.name}</h4>
              <p><strong>Specialty:</strong> {specialist.specialty}</p>
              <p><strong>Availability:</strong> {specialist.availability}</p>
              <p><strong>Rating:</strong> {specialist.rating}/5</p>
              <p><strong>Hospital:</strong> {specialist.hospital}</p>
            </div>
          ))
        ) : (
          !loading && <p>No specialists found matching your criteria</p>
        )}
      </div>
    </div>
  );
};

export default SearchSpecialists;
