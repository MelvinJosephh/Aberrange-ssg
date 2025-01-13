import React from "react";
import { useStepContext } from "../../../Context/StepContext.js"; 
import StepTemplate from "../shared/StepTemplate";

const Step5Commitment = ({ onNext, onBack }) => {
  const { formData, updateStepData } = useStepContext(); 

  const options = [
    "Full-time",
    "Part-time",
    "Contract",
    "Hourly/Project-based"
  ];

  const selectedOption = formData.commitment; 

  const handleNext = () => {
    if (selectedOption) {
      updateStepData("commitment", selectedOption);
      onNext();
    }
  };

  return (
    <StepTemplate
      title="What level of commitment will you require from the developer?"
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={(value) => updateStepData("commitment", value)} 
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Step5Commitment;
