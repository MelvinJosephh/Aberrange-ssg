import React from "react";
import { useStepContext } from "../../../Context/StepContext.js"; 
import StepTemplate from "../shared/StepTemplate";

const Step6Skills = ({ onNext, onBack }) => {
  const { formData, updateStepData } = useStepContext(); 

  const skills = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "AWS",
    "Machine Learning",
    "UI/UX Design",
    "Project Management",
    "SQL",
    "Mobile Development",
    "Others"
  ];

  const selectedSkills = formData.skills; 

  const handleSkillToggle = (skill) => {
    const newSkills = selectedSkills.includes(skill)
      ? selectedSkills.filter((item) => item !== skill)
      : [...selectedSkills, skill];

    updateStepData("skills", newSkills); 
  };

  const handleNext = () => {
    onNext(); 
  };

  return (
    <StepTemplate
      title="What skills would you like to see in your new hire?"
      options={skills}
      selectedOption={selectedSkills}
      setSelectedOption={handleSkillToggle} 
      isMultiSelect={true}
      onNext={handleNext}
      onBack={onBack}
      showSkipButton={true}
    />
  );
};

export default Step6Skills;
