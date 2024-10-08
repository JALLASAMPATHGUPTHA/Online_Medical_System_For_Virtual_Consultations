import React from 'react';
import './MainNavBar.css'; // Import CSS file for styling

export default function About() {
  return (
    <div className="about-page">
      {/* About Card */}
      <div className="card">
        <h4>About</h4>
        <p>
          We are excited to offer our Virtual Hospital Management System, providing
          comprehensive healthcare services across specialties like Nephrology, Urology,
          Radiology, Neurology & Neurosurgery, and more. The system supports virtual consultations,
          online appointments, e-prescriptions, lab reports, and 24/7 emergency care, all accessible from home.
          With secure management of medical records and real-time communication between patients
          and healthcare professionals, our platform ensures seamless, efficient healthcare
          delivery, offering world-class medical services at your fingertips.
        </p>
      </div>

      {/* Vision, Mission, and Values Cards */}
      <div className="info-cards">
        <div className="small-card">
          <h4>Our Vision</h4>
          <p>
            To revolutionize healthcare delivery by making specialized, world-class medical services accessible to everyone through innovative virtual solutions.
          </p>
        </div>
        <div className="small-card">
          <h4>Our Mission</h4>
          <p>
            To provide comprehensive, patient-centered care, leveraging technology to enhance healthcare efficiency and improve patient outcomes.
          </p>
        </div>
        <div className="small-card">
          <h4>Our Values</h4>
          <p>
            We are committed to excellence, integrity, compassion, innovation, and collaboration, ensuring the highest standards of healthcare.
          </p>
        </div>
      </div>
    </div>
  );
}
