import React from "react";
import "../../../Styles/HireTalent/ProgressIndicator.module.scss";

const ProgressIndicator = ({ currentStep, totalSteps }) => {
  // Calculate progress percentage
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-indicator">
      <div className="step-text">
        Step {currentStep} of {totalSteps}
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
