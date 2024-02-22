import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined, LeftOutlined } from "@ant-design/icons";

import forgotImage from "@/../../public/assets/login/forgot/forgot.svg";

const page = () => {
  return (
    <>
      <div className="flex justify-between items-center p-10 md:mr-[150px]">
        <div className="md:w-[50vw] md:h-[88vh] bg-[#E6F7FF] rounded-3xl flex justify-center items-center">
          <Image
            src={forgotImage}
            className="bg-[#E6F7FF] w-[100%] scale-90 h-[100%] rounded-3xl "
          />
        </div>
        <div className="ml-5 leading-10">
          <p className="cursor-pointer hover:scale-105 transition-all ">
            <span>
              <LeftOutlined />
            </span>{" "}
            Back
          </p>
          <p className="font-bold text-xl ">Forgot Password</p>
          <p className="text-[#A2A1A8] text-sm mb-6">
            Enter your registered email address. we’ll send you a code to reset
            your
            <br /> password
          </p>
          {/* <input type='text' placeholder='Enter Email  Address'/><br/> */}
          {/* <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}> */}
          <div className="flex flex-col ">
            <Input
              prefix={<UserOutlined className="site-form-item-icon " />}
              placeholder="Enter Email Address"
              className="w-[70%] my-5"
              size="large"
            />
            <Link href="/login/otp">
            <button className="w-[70%] bg-blue-500 hover:bg-blue-400 rounded-sm text-white text-base p-2 cursor-pointer">
              Send otp
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
