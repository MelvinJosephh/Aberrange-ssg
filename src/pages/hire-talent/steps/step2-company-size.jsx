import React from "react";
import { useStepContext } from "../../../Context/StepContext.js"; 
import StepTemplate from "../shared/StepTemplate";

const Step2CompanySize = ({ onNext, onBack }) => {
  const { formData, updateStepData } = useStepContext(); 

  const options = [
    "1-10 Employees",
    "11-50 Employees",
    "51-200 Employees",
    "201+ Employees",
    "Solo Project"
  ];

  const selectedOption = formData.companySize; 

  const handleNext = () => {
    if (selectedOption) {
      updateStepData("companySize", selectedOption); 
      onNext();
    }
  };

  return (
    <StepTemplate
      title="How many people are employed at your company?"
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={(value) => updateStepData("companySize", value)} 
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Step2CompanySize;
