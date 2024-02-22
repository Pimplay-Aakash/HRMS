"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";

import Image from "next/image";
import LoginImage from "../../../public/assets/login/login2.svg";
import synectiksImage from "../../../public/assets/login/synectiks.svg";
import welcomeImage from "../../../public/assets/login/hand.jpg";
import unionImage from "../../../public/assets/login/Union.svg";

const Page = () => {
  const [onBoarded, setOnBoarded] = useState(false);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  // const router = useRouter();

  return (
    <>
      <div className="flex justify-center items-center p-10 h-screen gap-16">
        <div className="md:w-[60vw] md:h-[88vh]  bg-[#E6f7ff]  flex justify-center items-center rounded-3xl overflow-hidden">
          <Image
            src={LoginImage}
            className="bg-[#E6F7FF] w-[50%] h-[80%] scale-150"
          />
        </div>
        <div className="w-[50%]">
          <div className="ml-5 mb-14">
            <p className="font-semibold text-2xl">HR Portal</p>
            <Image src={synectiksImage} className="w-[100px]" />
          </div>

          <div className="ml-5">
            <div>
              <div className="flex items-center">
                <p className="font-bold m-0 p-0 text-xl">Welcome</p>
                <Image
                  src={welcomeImage}
                  className="w-[25px] h-[25px] ml-2 mb-2"
                />
              </div>
              <p className="text-gray-400 mb-4 -mt-1 text-sm">
                please login here
              </p>
            </div>
          </div>
          <Form
            name="normal_login"
            className="login-form w-[50%] ml-5"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please Enter your username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please Enter your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <div className="flex justify-between">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Link
                  href="/login/forgot"
                  className="login-form-forgot text-blue-500"
                >
                  Forgot password
                </Link>
              </div>
            </Form.Item>

            <Form.Item>
              <Link href={`${onBoarded ? "/dashboard" : "/onboarding"}`}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button bg-blue-500 w-[100%]"
                >
                  Log in
                </Button>
              </Link>
            </Form.Item>
            <p>
              Dont have any account{" "}
              <Link href="/signup" className="text-blue-500 cursor-pointer">
                ?sign up
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Page;
