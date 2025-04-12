import { useState, useEffect } from "react";
import diseasesData from "./diseases.json";
import "./MedicineRecommendation.css";

function MedicineRecommendation() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDisease, setSelectedDisease] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [sliderValue, setSliderValue] = useState(1500);
  const [filteredMedicines, setFilteredMedicines] = useState([]);

  const filteredDiseases = diseasesData.diseases.filter(disease =>
    disease.disease.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (selectedDisease) {
      const diseaseData = diseasesData.diseases.find(d => d.disease === selectedDisease);
      if (diseaseData) {
        const medicines = diseaseData.medications.filter(med => med.price <= sliderValue);
        setFilteredMedicines(medicines);
      }
    }
  }, [selectedDisease, sliderValue]);

  const handleDiseaseSelect = (disease) => {
    setSelectedDisease(disease);
    setSearchTerm(disease);
    setShowDropdown(false);
  };

  return (
    <div className="medicine-recommendation-container">
      <h1>💊 Medicine Recommendations</h1>
      
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a disease..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
        />
        {showDropdown && (
          <div className="dropdown">
            {filteredDiseases.length > 0 ? (
              filteredDiseases.map((disease, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleDiseaseSelect(disease.disease)}
                >
                  {disease.disease}
                </div>
              ))
            ) : (
              <div className="dropdown-item">No diseases found</div>
            )}
          </div>
        )}
      </div>

      {selectedDisease && (
        <>
          <h2>{selectedDisease}</h2>
          
          <div className="price-scroller">
            <label>Price Range: ₹0 - ₹{sliderValue}</label>
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
            />
          </div>

          <div className="scroller-results">
            <h3>Medicines under ₹{sliderValue}:</h3>
            {filteredMedicines.length > 0 ? (
              <ul className="medicines-list">
                {filteredMedicines.map((med, index) => (
                  <li key={index}>
                    <strong>{med.name}</strong> - ₹{med.price} (for {selectedDisease})
                  </li>
                ))}
              </ul>
            ) : (
              <p>No medicines found in this price range</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default MedicineRecommendation;