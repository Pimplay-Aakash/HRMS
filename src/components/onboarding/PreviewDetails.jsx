import React, { useState } from "react";
import ProfDtls from "./ProfessionalDetailPreview";
import PersonalDtls from "./PersonalDetailPreview";

const PreviewDetails = ({ step, setStep }) => {
  const [inStep, setInStep] = useState(1);
  return (
    <>
      {inStep == 1 && (
        <PersonalDtls
          setInStep={setInStep}
          setStep={setStep}
          inStep={inStep}
          step={step}
        />
      )}
      {inStep == 2 && (
        <ProfDtls
          setInStep={setInStep}
          setStep={setStep}
          inStep={inStep}
          step={step}
        />
      )}
    </>
  );
};

export default PreviewDetails;
