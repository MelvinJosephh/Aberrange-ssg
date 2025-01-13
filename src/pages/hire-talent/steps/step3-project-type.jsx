import React from "react";
import { useStepContext } from "../../../Context/StepContext.js"; 
import StepTemplate from "../shared/StepTemplate";

const Step3ProjectType = ({ onNext, onBack }) => {
  const { formData, updateStepData } = useStepContext(); 

  const options = [
    "New idea or project",
    "Existing project that needs more resources",
    "Academic Help",
    "None of the above, I'm just looking to learn more about Aberrange"
  ];

  const selectedOption = formData.projectType; 

  const handleNext = () => {
    if (selectedOption) {
      updateStepData("projectType", selectedOption); 
      onNext();
    }
  };

  return (
    <StepTemplate
      title="What type of project are you hiring for?"
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={(value) => updateStepData("projectType", value)} 
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Step3ProjectType;
