"use client";
import { useRef } from "react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { UseDispatch } from "react-redux";
import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/navigation";
// import signup from "../../../public/assets/photos/signup/signuphero.png";
import signup from "@/../public/assets/photos/signup/signuphero1.svg";
import hrmslogo from "@/../public/assets/photos/signup/hrmslogo.svg";

const Signup = () => {
  const router = useRouter();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();

  const handleOnSubmit = () => {
    router.push("/signup/confirm-mail");
  };
  // console.log(email.current.value);
  return (
    <div className="flex justify-center items-center p-10 gap-16">
      <div className="md:w-[70vw] md:h-[88vh] bg-[#E6F7FF] rounded-3xl flex justify-center items-center">
        <Image src={signup} alt="signup" className="w-[80%]" />
      </div>
      <div className="md:w-[50vw] flex flex-col  items-start">
        <span className="flex items-center gap-3">
          <Image src={hrmslogo} />
          <h1 className="font-semibold text-2xl">HRMS</h1>
        </span>
        <div className="mt-12">
          <h1 className="font-semibold text-xl">Sign up</h1>
          <h2 className="text-[#A2A1A8] text-md">Create Your Account</h2>
        </div>
        <div className="mt-5">
          <Form
            className="flex flex-col "
            style={{ width: "50vh", fontSize: "1.1rem" }}
            onFinish={() => {
              console.log("form submitted");
              router.push("/signup/confirm-mail");
            }}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: `${false ? "hello" : "Please enter valid email"}`,
                },
              ]}
            >
              <Input
                placeholder="Email"
                style={{ fontSize: "1.2rem" }}
                ref={email}
                required={true}
                onChange={(e) => {
                  email.current.value = e.target.value;
                }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please create your password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Password(6 digits at least, case sensitive)"
                style={{ fontSize: "1.1rem" }}
                size="large"
                required={true}
              />
            </Form.Item>

            <Form.Item
              name="confirmpassword"
              rules={[
                {
                  required: true,
                  message: "Password does not match!",
                },
              ]}
            >
              <Input.Password
                placeholder="Comfirm password"
                style={{ fontSize: "1.1rem" }}
                size="large"
                required={true}
              />
            </Form.Item>
            {/* <Link href="/signup/confirm-mail"> */}
            <Button
              className="w-full "
              // type="primary"
              type="submit"
              style={{
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "10px",
                backgroundColor: "#1890FF",
                color: "white",
              }}
              size="large"
              onClick={() => {
                handleOnSubmit();
              }}
            >
              Create Account
            </Button>
            {/* </Link> */}
          </Form>
          <br />
          <span className="">
            Have an account ?{" "}
            <Link href="login" className="text-[#1890FF]">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
