import React from 'react';

const PatientList = ({ onSelect }) => {
  // Sample patient data - in a real app this would come from an API
  const patients = [
    { id: 1, name: 'John Doe', disease: 'Diabetes' },
    { id: 2, name: 'Jane Smith', disease: 'Hypertension' },
    { id: 3, name: 'Bob Johnson', disease: 'Asthma' }
  ];

  return (
    <div>
      <h2>Select a Patient</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            <button onClick={() => onSelect(patient)}>
              {patient.name} - {patient.disease}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
