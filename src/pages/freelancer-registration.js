import React, { useState } from 'react';
import { StyledButton, StyledTextField } from "../Shared/StyledComponents.jsx";
import '../../Styles/ModalPages/FreelancerRegister.scss';

const FreelancerRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    title: '',
    skills: '',
    experience: '',
    availability: '',
    portfolio: '',
    notes: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Navigate steps
  const nextStep = () => step < 4 && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add logic to send data to the backend
    setStep(4); // Move to confirmation page
  };

  return (
    <div className="freelancer-registration">
      <h1>Freelancer Registration</h1>
      <div className="form-container">
        {step === 1 && (
          <div className="step">
            <h2>Step 1: Personal Details</h2>
            <StyledTextField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <StyledTextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <StyledTextField
              label="Phone (Optional)"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <StyledButton onClick={nextStep}>Next</StyledButton>
          </div>
        )}

        {step === 2 && (
          <div className="step">
            <h2>Step 2: Professional Details</h2>
            <StyledTextField
              label="Professional Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            <StyledTextField
              label="Key Skills (comma-separated)"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />
            <StyledTextField
              label="Years of Experience"
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
            <div>
              <label>Availability:</label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Part-time">Part-time</option>
                <option value="Full-time">Full-time</option>
                <option value="Freelance">Freelance</option>
              </select>
            </div>
            <StyledButton onClick={prevStep}>Back</StyledButton>
            <StyledButton onClick={nextStep}>Next</StyledButton>
          </div>
        )}

        {step === 3 && (
          <div className="step">
            <h2>Step 3: Portfolio & Notes</h2>
            <StyledTextField
              label="Portfolio Links (optional)"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
            />
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Additional Notes (optional)"
            />
            <StyledButton onClick={prevStep}>Back</StyledButton>
            <StyledButton onClick={handleSubmit}>Submit</StyledButton>
          </div>
        )}

        {step === 4 && (
          <div className="step">
            <h2>Thank You!</h2>
            <p>Your registration is complete. We’ll reach out to you for future opportunities.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FreelancerRegistration;
