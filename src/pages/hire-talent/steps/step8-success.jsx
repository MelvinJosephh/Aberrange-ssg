import React, { useState } from "react";
import { useStepContext } from "../../../Context/StepContext.js";
import StepTemplate from "../shared/StepTemplate.js";
import { StyledTextField } from "../../Shared/StyledComponents.js";
import "../../../Styles/HireTalent/Step8Success.module.scss";
import axios from "axios";

const Step8Success = ({ onBack }) => {
  const { formData } = useStepContext();
  const { startDate } = formData;

  const [contactInfo, setContactInfo] = useState({
    email: "",
    companyName: "",
    contactName: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      contactInfo.email &&
      contactInfo.companyName &&
      contactInfo.contactName &&
      contactInfo.phoneNumber
    ) {
      const hiringData = { ...formData, contactInfo };

      try {
        const response = await axios.post("http://localhost:5000/api/submit-hiring-form", hiringData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200 || response.status === 201) {
          alert("Form submitted successfully!");
        }
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("An error occurred while submitting the form.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <StepTemplate
      title="Success! Let's connect you with talent."
      options={[]}
      onBack={onBack}
      onNext={handleSubmit} // Link handleSubmit here
      isFinalStep={true}
    >
      <div className="form-container">
        <p className="form-description">
          Please provide your contact details below to connect with the best talent.
          {startDate && <p>Start date: {startDate}</p>}
        </p>
        <form>
          <div className="form-field">
            <StyledTextField
              label="Email Address"
              type="email"
              id="email"
              name="email"
              value={contactInfo.email}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>
          <div className="form-field">
            <StyledTextField
              label="Company Name"
              type="text"
              id="companyName"
              name="companyName"
              value={contactInfo.companyName}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>
          <div className="form-field">
            <StyledTextField
              label="Your Name"
              type="text"
              id="contactName"
              name="contactName"
              value={contactInfo.contactName}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>
          <div className="form-field">
            <StyledTextField
              label="Phone Number"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={contactInfo.phoneNumber}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>
        </form>
      </div>
    </StepTemplate>
  );
};

export default Step8Success;
