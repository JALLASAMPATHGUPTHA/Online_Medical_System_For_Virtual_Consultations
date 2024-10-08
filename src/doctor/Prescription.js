import React from "react";
import './doctor.css'

const AddPrescriptionForm = () => {
  return (
    <div className="dashboard-container">
      <div className="content">
        <div className="form-container">
          <h2>Add Prescription</h2>
          <form className="prescription-form">
            <label>Doctor</label>
            <input type="text" placeholder="Enter Doctor's Name" />

            <label>Patient</label>
            <input type="text" placeholder="Enter Patient's Name" />

            <label>Case History</label>
            <input type="text" placeholder="Enter Case History" />

            <label>Medication</label>
            <input type="text" placeholder="Enter Medication Details" />

            <label>Description</label>
            <textarea placeholder="Enter Description"></textarea>

            <button type="submit" className="send-button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPrescriptionForm;
