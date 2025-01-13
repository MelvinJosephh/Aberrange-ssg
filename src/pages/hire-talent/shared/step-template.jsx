import "../../../Styles/HireTalent/StepTemplate.module.scss";
import React from "react";
import { StyledButton } from "../../Shared/StyledComponents.js";

const StepTemplate = ({
  title,
  options,
  selectedOption,
  setSelectedOption,
  onNext,  // Handle next step or submit action here
  onBack,
  isFirst = false,
  isFinalStep = false,
  showSkipButton = false,
  children,
}) => {
  return (
    <div className="step-template">
      <h2>{title}</h2>

      {/* Render options as a grid */}
      {options.length > 0 && (
        <div className="options-grid">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => setSelectedOption(option)}
              className={`option ${selectedOption === option ? "selected" : ""}`}
            >
              {option}
            </div>
          ))}
        </div>
      )}

      {/* Render Step content */}
      <div className="step-content">{children}</div>

      {/* Conditionally render the Back button (only if not the first step) */}
      <div className="actions">
        {!isFirst && (
          <StyledButton onClick={onBack} className="back-button">
            Back
          </StyledButton>
        )}
        {!isFinalStep ? (
          <StyledButton onClick={onNext} className="next-button">
            Next
          </StyledButton>
        ) : (
          <StyledButton onClick={onNext} className="submit-button">
            Submit
          </StyledButton>
        )}
        {showSkipButton && !isFinalStep && (
          <StyledButton onClick={() => onNext({})} className="skip-button">
            Skip
          </StyledButton>
        )}
      </div>
    </div>
  );
};

export default StepTemplate;
