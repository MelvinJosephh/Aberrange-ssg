import React from "react";
import { useStepContext } from "../../../Context/StepContext.js";
import StepTemplate from "../shared/StepTemplate";

const Step1WhoToHire = ({ onNext }) => {
  const { formData, updateStepData } = useStepContext();

  return (
    <StepTemplate
      title="Who would you like to hire?"
      isFirst={true} 
      options={["Web Developer", "Academic Researcher", "Q/A Assistant", "System Architect", "Virtual Assistant", "Excel Expert", "Data Analyst", "Graphic Designer"]}
      selectedOption={formData.hire}
      setSelectedOption={(value) => updateStepData("hire", value)}
      onNext={onNext}
    />
  );
};

export default Step1WhoToHire;
