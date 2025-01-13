import React, { createContext, useContext, useState } from "react";

const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    hire: "",
    companySize: "",
    projectType: "",
    projectLength: "",
    commitment: "",
    skills: [],
    startDate: "",
    contactInfo: {
      email: "",
      companyName: "",
      contactName: "",
      phoneNumber: "",
    },
  });

  const updateStepData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <StepContext.Provider value={{ formData, updateStepData }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStepContext = () => useContext(StepContext);
