import { useState, useEffect } from "react";
import diseasesData from "./diseases.json";
import { diseaseSpecialtyMap, specialistsByTier, getTier } from "./specialistsData";
import "./MedicineRecommendation.css";

function MedicineRecommendation() {
  const [budget, setBudget] = useState(5000);
  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDisease, setSelectedDisease] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [sliderValue, setSliderValue] = useState(5000);
  const [allMedicines, setAllMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);

  const filteredDiseases = diseasesData.diseases.filter(disease =>
    disease.disease.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fetchMedicines = async () => {
    if (!selectedDisease || !budget) return;
    try {
      const response = await fetch(
        `http://localhost:5000/api/medicines?disease=${encodeURIComponent(selectedDisease)}&budget=${encodeURIComponent(budget)}`
      );
      const data = await response.json();
      setMedicines(data);
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };

  const handleDiseaseSelect = (disease) => {
    setSelectedDisease(disease);
    setSearchTerm("");
    setShowDropdown(false);

    const diseaseData = diseasesData.diseases.find(d => d.disease === disease);
    if (diseaseData) {
      const meds = diseaseData.medications.map(med => ({ ...med, disease: diseaseData.disease }));
      setAllMedicines(meds);
      setFilteredMedicines(meds);
    }
  };

  useEffect(() => {
    if (allMedicines.length > 0) {
      const filtered = allMedicines.filter(med => med.price <= sliderValue);
      setFilteredMedicines(filtered);
    }
  }, [sliderValue, allMedicines]);

  const [showSpecialists, setShowSpecialists] = useState(false);
  const [recommendedSpecialists, setRecommendedSpecialists] = useState([]);

  const getRecommendedSpecialists = () => {
    try {
      if (!selectedDisease || !budget) return [];
  
      const specialty = diseaseSpecialtyMap[selectedDisease];
      if (!specialty) return [];
  
      const tiers = ["low", "medium", "high"];
      const targetTier = getTier(Number(budget));
      const targetIndex = tiers.indexOf(targetTier);
  
      for (let i = targetIndex; i >= 0; i--) {
        const tier = tiers[i];
        const specialists = specialistsByTier[tier] || [];
  
        // Try matching exact specialty
        let matched = specialists.filter(spec => spec.specialty === specialty);
        if (matched.length > 0) return matched;
  
        // If no match, try fallback to "General Medicine"
        matched = specialists.filter(spec => spec.specialty === "General Medicine");
        if (matched.length > 0) return matched;
      }
  
      return [];
    } catch (error) {
      console.error("Error getting specialists:", error);
      return [];
    }
  };
  

  // Update specialists whenever budget changes
  useEffect(() => {
    if (showSpecialists) {
      setRecommendedSpecialists(getRecommendedSpecialists());
    }
  }, [budget, showSpecialists]);

  const handleShowSpecialists = () => {
    setRecommendedSpecialists(getRecommendedSpecialists());
    setShowSpecialists(!showSpecialists);
  };

  return (
    <div className="medicine-recommendation-container">
      <h3>💊 Medicine Recommendations</h3>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder={selectedDisease || "Search for a disease..."}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => {
            setShowDropdown(true);
            setSearchTerm("");
          }}
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

      <div className="price-scroller">
        <label>Price Range: ₹0 - ₹{sliderValue}</label>
        <input
          type="range"
          min="0"
          max={Math.max(5000, ...allMedicines.map(m => m.price))}
          step="100"
          value={sliderValue}
          onChange={(e) => {
            const value = Number(e.target.value);
            setSliderValue(value);
            setBudget(value);
          }}
        />
      </div>

      {selectedDisease && (
        <div className="scroller-results">
          <h4>Medicines {sliderValue < 5000 ? `under ₹${sliderValue}` : "for all prices"}:</h4>
          {filteredMedicines.length > 0 ? (
            <>
              <ul className="medicines-list">
                {filteredMedicines.map((med, index) => (
                  <li key={index}>
                    <strong>{med.name}</strong> - ₹{med.price} (for {med.disease})
                  </li>
                ))}
              </ul>

              <button className="specialist-button" onClick={handleShowSpecialists}>
                {showSpecialists ? 'Hide Specialists' : 'Show Recommended Specialists'}
              </button>

              {showSpecialists && (
                <div className="specialists-section">
                  <h4>
                    Recommended Specialists for {selectedDisease} (Budget: ₹{budget}, Tier: {getTier(Number(budget))})
                  </h4>
                  {recommendedSpecialists.length > 0 ? (
                    <div className="specialists-list">
                      {recommendedSpecialists.map((spec, index) => (
                        <div key={index} className="specialist-card">
                          <h5>{spec.name}</h5>
                          <p><strong>Specialty:</strong> {spec.specialty}</p>
                          <p><strong>Price Range:</strong> {spec.priceRange}</p>
                          <p><strong>Contact:</strong> {spec.email} | {spec.phone}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="no-specialists">No specialists found for this disease and budget range.</p>
                  )}
                </div>
              )}
            </>
          ) : (
            <p>No medicines found in this price range</p>
          )}
        </div>
      )}
    </div>
  );
}

export default MedicineRecommendation;
