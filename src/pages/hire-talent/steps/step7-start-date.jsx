import React from "react";
import { useStepContext } from "../../../Context/StepContext.js"; 
import StepTemplate from "../shared/StepTemplate";

const Step7StartDate = ({ onNext, onBack }) => {
  const { formData, updateStepData } = useStepContext();

  const options = [
    "Immediately",
    "In 1 to 2 weeks",
    "More than 2 weeks from now",
    "I'll decide later"
  ];

  const selectedOption = formData.startDate; 

  const handleNext = () => {
    if (selectedOption) {
      updateStepData("startDate", selectedOption); 
      onNext(); 
    }
  };

  return (
    <StepTemplate
      title="When do you need the developer?"
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={(value) => updateStepData("startDate", value)} 
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Step7StartDate;
