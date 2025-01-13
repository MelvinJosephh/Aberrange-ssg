import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'; // Next.js routing hook
import ProgressIndicator from "./shared/ProgressIndicator";
import "../../Styles/HireTalent/HireTalent.module.scss";

// Dynamically import the step components
const Step1WhoToHire = dynamic(() => import("./steps/step1-who-to-hire"));
const Step2CompanySize = dynamic(() => import("./steps/step2-company-size"));
const Step3ProjectType = dynamic(() => import("./steps/step3-project-type"));
const Step4ProjectLength = dynamic(() => import("./steps/step4-project-length"));
const Step5Commitment = dynamic(() => import("./steps/step5-commitment"));
const Step6Skills = dynamic(() => import("./steps/step6-skills"));
const Step7StartDate = dynamic(() => import("../HireTalent/steps/step7-start-date"));
const Step8Success = dynamic(() => import("./steps/step8-success"));

import dynamic from 'next/dynamic';

// Define the steps data
const steps = [
  { path: "step1", component: Step1WhoToHire },
  { path: "step2", component: Step2CompanySize },
  { path: "step3", component: Step3ProjectType },
  { path: "step4", component: Step4ProjectLength },
  { path: "step5", component: Step5Commitment },
  { path: "step6", component: Step6Skills },
  { path: "step7", component: Step7StartDate },
  { path: "step8", component: Step8Success },
];

const HireTalentFlow = () => {
  const router = useRouter(); // Next.js router
  const [formState, setFormState] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  // Determine the current step from the URL
  useEffect(() => {
    const path = router.asPath.split("/").pop();
    const step = parseInt(path.replace("step", ""), 10);
    if (!isNaN(step)) setCurrentStep(step);
  }, [router]);

  // Navigation handlers
  const handleNext = (data) => {
    setFormState((prevState) => ({ ...prevState, ...data }));
    router.push(`/hire-talent/step${currentStep + 1}`); // Navigate to the next step
  };

  const handleBack = () => {
    router.push(`/hire-talent/step${currentStep - 1}`); // Navigate to the previous step
  };

  return (
    <div className="hire-talent-flow">
      <ProgressIndicator currentStep={currentStep} totalSteps={steps.length} />
      <div>
        {/* Dynamically render the current step component based on the URL */}
        {steps.map((step, index) => {
          if (index + 1 === currentStep) {
            const Component = step.component;
            return (
              <Component
                key={index}
                onNext={handleNext}
                onBack={index > 0 ? handleBack : undefined}
                formState={formState}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default HireTalentFlow;
