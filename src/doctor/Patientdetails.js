import React, { useState } from 'react';
import './doctor.css';

function App() {
  const [patientDetails, setPatientDetails] = useState({
    patientName: '',
    patientAge: '',
    gender: '',
    disease: '',
    description: '',
    medicineRecommended: ''
  });

  const handleSearch = () => {
    
    setPatientDetails({
      patientName: '' ,
      patientAge: '',
      gender: '',
      disease: '',
      description: '',
      medicineRecommended: ''
    });
  };

  return (
    <div className="app-container">
      

      <div className="search-section">
        <input type="text" placeholder="Patient ID" className="search-input" />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>

      <div className="patient-details-section">
        <p><strong>Patient Name:</strong> {patientDetails.patientName}</p>
        <p><strong>Patient Age:</strong> {patientDetails.patientAge}</p>
        <p><strong>Gender:</strong> {patientDetails.gender}</p>
        <p><strong>Disease:</strong> {patientDetails.disease}</p>
        <p><strong>Description:</strong> {patientDetails.description}</p>
        <p><strong>Medicine Recommended:</strong> {patientDetails.medicineRecommended}</p>
      </div>
    </div>
  );
}

export default App;
