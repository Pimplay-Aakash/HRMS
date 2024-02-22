"use client";
import React from "react";
import Link from "next/link";
import otpImage from "@/../../public/assets/login/otp/otp.svg";
import Image from "next/image";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined, LeftOutlined } from "@ant-design/icons";

const page = () => {
  return (
    <>
      <div className="flex justify-between items-center p-10 gap-10 md:mr-[200px]">
        <div className="md:w-[53vw] md:h-[88vh] bg-[#E6F7FF] rounded-3xl flex justify-center items-center overflow-hidden">
          <Image src={otpImage} className="bg-[#E6F7FF] w-full scale-75" />
        </div>
        <div className="ml-5 leading-10 ">
          <p className="cursor-pointer hover:scale-105 transition-all">
            <span>
              <LeftOutlined />
            </span>{" "}
            Back
          </p>
          <p className="font-bold text-xl ">Enter OTP</p>
          <p className="text-[#A2A1A8] text-sm mb-6">
            We have share a code of your registered email address
            <br />
            robertallen@example.com
          </p>
          {/* <input type='text' placeholder='Enter Email  Address'/><br/> */}
          {/* <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}> */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 w-[200px] ">
              {/* {fields.map((field, index) => (
                <Input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  placeholder="0"
                  className="w-[3vw] my-5 text-center"
                  size="large"
                  value={field}
                  // type="number"
                  maxLength={1}
                  onChange={(event) => handleChange(index, event)}
                />
              ))} */}
              <Input
                placeholder="0"
                className="w-[3vw] my-5 text-center"
                size="large"
                // style={}
                maxLength={1}
              />
              <Input
                placeholder="0"
                className="w-[3vw] my-5 text-center"
                size="large"
                maxLength={1}
              />
              <Input
                placeholder="0"
                className="w-[3vw] my-5 text-center"
                size="large"
                maxLength={1}
              />
              <Input
                placeholder="0"
                className="w-[3vw] my-5 text-center"
                size="large"
                maxLength={1}
              />
            </div>
            
            <Link href="/login/reset">
            <button className="w-[200px] bg-blue-500 rounded-sm text-white text-base p-1 cursor-pointer">
              verify
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
