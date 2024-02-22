"use client";
import CompanyDetails from "@/components/onboarding/CompanyDetails";
import Onboarding from "@/components/onboarding/Onboarding";
import PreviewDetails from "@/components/onboarding/PreviewDetails";
import { useState } from "react";
import {useRouter} from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  return (
    <div>
      {step == 1 && <Onboarding step={step} setStep={setStep} />}
      {step == 2 && <CompanyDetails step={step} setStep={setStep} />}
      {step == 3 && <PreviewDetails step={step} setStep={setStep}/>}
      {step == 4 && router.push("/hrms")}
    </div>
  );
};

export default page;
