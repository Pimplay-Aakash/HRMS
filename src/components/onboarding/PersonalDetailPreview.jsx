import React from "react";
import Image from "next/image";
import { IoChevronBackOutline } from "react-icons/io5";
import Onboard from "@/../public/assets/onboarding/OnbordingImg.svg";
import Logout from "@/../public/assets/onboarding/Logout.svg";
import Company from "@/../public/assets/onboarding/company.svg";
import Profile from "@/../public/assets/onboarding/profile.svg";
import Link from "next/link";

import { Button, Progress } from "antd";
const PreviewEmp = ({ setInStep, inStep, step, setStep }) => {
  return (
    <div className="flex justify-center items-center gap-16 w-[100%] h-[100vh] p-10 ">
      <div className="md:w-[70vw] h-[88vh] rounded-2xl bg-[#E6F7FF] flex justify-center items-center">
        <Image width={100} height={100} src={Onboard} className="w-[60%]  " />
      </div>
      <div className="flex flex-col gap-5 items-center  w-[50vw] h-[85vh] relative">
        <Link href="/login">
          <div
            className="flex  items-center p-1 gap-1 border border-blue-500 text-black group btn hover:bg-blue-100 transition w-[100px] absolute rounded-sm
         right-2 -top-5 cursor-pointer"
          >
            <Image
              width={15}
              height={15}
              src={Logout}
              className="group-hover:bg-white"
            />
            <button className="">Logout</button>
          </div>
        </Link>
        <div className="w-full h-full flex flex-col gap-5 ">
          <div className="w-full  flex flex-col">
            <span
              className="flex items-center gap-2 hover:scale-105 transition-all cursor-pointer mt-2 "
              onClick={() => {
                setStep(step - 1);
              }}
            >
              <IoChevronBackOutline />
              <p>Back</p>
            </span>
            <p className="text-sm text-gray-400">Onboarding</p>
            <Progress percent={86} showInfo={false} />
            <span className="text-[#4F7396] text-sm -mb-2 ">step 3 of 3</span>
          </div>
          <h2 className="text-xl font-bold -mb-3">Preview</h2>
          <div className="flex gap-8 -mb-2">
            <div className=" border-b-2 border-blue-400 text-blue-400 font-medium cursor-pointer hover:scale-105 transition-all">
              Personal Details
            </div>
            <div
              className="border-b-2 border-black  font-medium cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setInStep(inStep + 1);
              }}
            >
              Company Details
            </div>
          </div>
        </div>
        <div className="self-start rounded-md w-full p-2 h-full flex flex-col gap-5">
          <Image src={Profile} width={100} height={100} />
          <div className="flex flex-col gap-2">
            <div className="flex  justify-start gap-40 border-b-2 -mt-2  border-gray-200 w-full">
              <span className="  flex flex-col gap-1 ">
                <span className="text-gray-400 ">First Name</span>
                <span>John</span>
              </span>
              <span className="flex flex-col gap-1 pl-4">
                <span className="text-gray-400 ">Last Name</span>
                <span>Wane</span>
              </span>
            </div>
            <div className="flex flex-col gap-1  border-b-2 border-gray-200 w-full">
              <span className="text-gray-400 ">Gender</span>
              <span>Male</span>
            </div>
            <div className="flex flex-col gap-1  border-b-2 border-gray-200 w-full">
              <span className="text-gray-400 ">Phone Number</span>
              <span>91+ 1234567891</span>
            </div>
            <div className="flex flex-col gap-1  border-b-2 border-gray-200 w-full">
              <span className="text-gray-400 "> Date of Birth</span>
              <span>01/01/2000</span>
            </div>
          </div>
        </div>
        <button
          className="w-[70%] lg:mt py-1 h-8 bg-[#1890FF] hover:bg-blue-600 transition-all text-white items-end"
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default PreviewEmp;
