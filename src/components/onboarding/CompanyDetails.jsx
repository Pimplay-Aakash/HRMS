"use client";
import React from "react";
import Image from "next/image";
import { IoChevronBackOutline } from "react-icons/io5";
import ImageUp from "@/../public/assets/onboarding/OnbordingImg.svg";
import Logout from "@/../public/assets/onboarding/Logout.svg";
import UploadImg from "./UploadImg";

import {
  Flex,
  Form,
  Input,
  InputNumber,
  Option,
  Progress,
  Segmented,
  Select,
  Item,
} from "antd";
import Link from "next/link";
const CompanyDetails = ({ step, setStep }) => {
  return (
    <div className="flex justify-center items-center gap-16 w-[100%] h-[100vh] p-10">
      <div className="w-[70vw] h-[88vh] rounded-2xl bg-[#E6F7FF] flex justify-center items-center">
        <Image width={100} height={100} src={ImageUp} className="w-[60%]  " />
      </div>

      <div className="w-[50vw] h-[96vh] -mt-7 flex flex-col relative">
        <Link href="/login">
          <div className="flex  items-center p-1 gap-1 border border-blue-500 hover:bg-blue-100 transition-all btn btn-primary w-[100px] absolute right-2 top-8 cursor-pointer">
            <Image width={15} height={15} src={Logout} />
            <button className="">Logout</button>
          </div>
        </Link>
        <div className="pt-14 flex flex-col">
          <div
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-all"
            onClick={() => {
              setStep(step - 1);
            }}
          >
            <IoChevronBackOutline />
            <p>Back</p>
          </div>
          <p className="font-sm">Onboarding</p>
          <Progress percent={62} showInfo={false} />

          <span className="text-[#4F7396] text-sm mb-3">step 2 of 3</span>

          <h2 className="text-xl mb-2 font-bold"> Add company details</h2>

          <p className="text-sm mb-2">
            Please provide your personal details, they will be used to complete
            your profile on Workflow App
          </p>
          <input
            placeholder="Legal Company Name"
            className="p-2 mb-2 border border-gray-300 outline-blue-500 w-[70%] "
          />
          <input
            placeholder="Company Email Address"
            className="p-2 mb-2 border border-gray-300 outline-blue-500 w-[70%] "
          />

          <div className="mb-2">
            <Form className="flex border w-[70%]">
              <select className="w-20 h-9 ml-3">
                <option>+91</option>
                <option>+86</option>
              </select>
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full h-9 p-2 border-gray-300 outline-blue-500"
              />
            </Form>
          </div>
          <input
            placeholder="Address Line 1"
            className="p-1 mb-2 border border-gray-300 outline-blue-500 w-[70%] "
          />
          <input
            placeholder="Address Line 2"
            className="p-1 mb-2 border border-gray-300 outline-blue-500 w-[70%] "
          />

          <div>
            <div className="w-full mb-1">
              <select
                placeholder="Country"
                className="w-[33.5%] mr-4 p-1 border border-gray-300 outline-blue-500"
              >
                <option value="India">Indai</option>
                <option value="Austrila">Austrila</option>
                <option value="Usa">Usa</option>
              </select>
              <select
                placeholder="State"
                className="w-[33.5%] p-1 border border-gray-300 outline-blue-500"
              >
                <option value="Telangana">Telangana</option>
                <option value="Kerala">Kerala</option>
                <option value="Goa">Goa</option>
              </select>
            </div>
            <div>
              <select
                placeholder="City"
                className="w-[33.5%] mr-4 p-1 border border-gray-300 outline-blue-500"
              >
                <option value="Hyderabad">Hyderabad</option>
                <option value="Varangel">Varangel</option>
                <option value="Mahaboob Nager">Mahaboob Nager</option>
              </select>
              <input
                type="number"
                placeholder="Zip Code"
                className="w-[33.5%] p-1 border border-gray-300 outline-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center h-20">
            <div className="">
              <UploadImg />
            </div>
            <div>
              <h2 className="border border-gray-300 p-1 pl-3">
                Upload Profile
              </h2>
              <p className="text-sm font-light">upload your profile picture</p>
            </div>
          </div>

          <button className="w-[70%] h-8 bg-[#1890FF] text-white hover:bg-blue-600" onClick={()=>{setStep(step+1)}}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
