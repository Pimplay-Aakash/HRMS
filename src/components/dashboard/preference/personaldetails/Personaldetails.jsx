"use client";
import React, { useState } from "react";
import { Button } from "antd";
import Image from "next/image";
import Profile from "@/../../public/assets/onboarding/profile.svg";
// import { useRouter } from "next/navigation";
// import { PiPencilSimpleLineFill } from "react-icons/pi";
import { AiFillEdit } from "react-icons/ai";
import Editpersonaldetails from "./Editpersonaldetails";

const PersonalDetails = () => {
  // const router = useRouter();
  const [edit, setEdit] = useState(false);

  return (
    <>
      {!edit ? (
        <div className="w-full h-full p-2 flex flex-col gap-10 shadow-sm">
          <div className="flex justify-between items-center  p-3 shadow-md">
            <h2 className="text-xl font-bold">Personal Details </h2>
            <button
              className="bg-blue-500 text-white flex gap-2 items-center rounded-md p-2 px-3"
              onClick={() => {
                setEdit(true);
              }}
            >
              <AiFillEdit className="text-lg" /> Edit
            </button>
          </div>
          <div className="w-full flex items-start justify-start gap-20 shadow-md">
            <div className="h-24 w-24 rounded-full border">
              <Image
                src={Profile}
                className="h-full w-full rounded-full"
                width={100}
                height={100}
              />
            </div>
            <div className="w-[40%] flex flex-col gap-5 leading-8">
              <div className="flex  justify-between  border-1 border-b  border-gray-200 w-full">
                <span className="  flex flex-col gap-1 w-[50%]">
                  <span className="text-gray-400 ">Fisrt Name</span>
                  <span>Abdullah</span>
                </span>
                <span className="flex flex-col gap-1 pl-4 w-[50%]">
                  <span className="text-gray-400 ">Fisrt Name</span>
                  <span>Abdullah</span>
                </span>
              </div>
              <div className="flex  justify-between border-b border-1  border-gray-200 w-full">
                <span className="  flex flex-col gap-1 w-[50%]">
                  <span className="text-gray-400 "> Date of Birth</span>
                  <span>15/08/2002</span>
                </span>
                <span className="flex flex-col gap-1 pl-4 w-[50%]">
                  <span className="text-gray-400 ">Gender</span>
                  <span>Male</span>
                </span>
              </div>
              <div className="flex  justify-between border-b border-1  border-gray-200 w-full">
                <span className="  flex flex-col gap-1 items-start w-[50%]">
                  <span className="text-gray-400 ">Phone Number</span>
                  <span>91+ 9505934716</span>
                </span>
                <span className="flex flex-col items-start gap-1 pl-4 w-[50%]">
                  <span className="text-gray-400 ">Work Email</span>
                  <span>Abdullah@synectiks.com</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Editpersonaldetails />
      )}
    </>
  );
};

export default PersonalDetails;
