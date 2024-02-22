import Image from "next/image";
import { Button, Progress } from "antd";
import { IoChevronBackOutline } from "react-icons/io5";
import Onboard from "@/../public/assets/onboarding/OnbordingImg.svg";
import Logout from "@/../public/assets/onboarding/Logout.svg";
import Company from "@/../public/assets/onboarding/company.svg";
import Profile from "@/../public/assets/onboarding/profile.svg";
import Link from "next/link";

const PreviewCompany = ({ setInStep, setStep, step, inStep }) => {
  return (
    <div className="flex justify-center items-center gap-16 w-[100%] h-[100vh] p-10 ">
      <div className="md:w-[70vw] h-[88vh] rounded-2xl  p-4 bg-[#E6F7FF] flex justify-center items-center">
        <Image width={100} height={100} src={Onboard} className="w-[60%] " />
      </div>
      <div className="flex flex-col gap-1 items-center  w-[50vw] relative leading-8">
        <Link href="/login">
          <div
            className="flex  items-center px-1 gap-1 border border-blue-500 text-black group btn hover:bg-blue-100 transition w-[100px] absolute rounded-sm
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
        <div className="w-full ">
          <div className="w-full  flex flex-col">
            <span
              className="flex items-center gap-2 hover:scale-105 transition-all cursor-pointer"
              onClick={() => {
                setStep(step - 1);
              }}
            >
              <IoChevronBackOutline />
              <p>Back</p>
            </span>
            <p className="text-sm text-gray-400">Onboarding</p>
            <Progress percent={86} showInfo={false} />
            <span className="text-[#4F7396] text-sm mb-2">step 3 of 3</span>
          </div>

          <h2 className="text-xl font-bold mb-2">Preview</h2>
          <div className="flex gap-8 ">
            <div
              className=" border-b-2 border-black font-medium cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setInStep(inStep - 1);
              }}
            >
              Personal Details
            </div>
            <div className="border-b-2  cursor-pointer border-blue-400 text-blue-400 font-medium hover:scale-105 transition-all ">
              Company Details
            </div>
          </div>
        </div>
        <div className="self-start rounded-md w-full p-2 h-full flex flex-col gap-2">
          <div className="w-[7vw] h-[8vh] bg-white rounded-md">
            <Image
              src={Company}
              width={100}
              height={100}
              className="w-[80%] h-[80%] border "
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex  justify-start gap-40 border-b  border-gray-200 w-full">
              <span className="  flex flex-col  ">
                <span className="text-gray-400 text-xs">
                  Legal Company Name
                </span>
                <span className="text-xs">Synectiks pvt Ltd</span>
              </span>
              <span className="flex flex-col  pl-4">
                <span className="text-gray-400 text-xs">
                  Company Email Address
                </span>
                <span className="text-xs">hr@stnectiks.com</span>
              </span>
            </div>
            <div className="flex flex-col   border-b border-gray-200 w-full">
              <span className="text-gray-400 text-xs">Phone Number</span>
              <span className="text-xs">91+ 9505934716</span>
            </div>
            <div className="flex flex-col   border-b border-gray-200 w-full">
              <span className="text-gray-400 text-xs">Address Line 1</span>
              <span className="text-xs">Synectiks, Level 6, N Heights</span>
            </div>
            <div className="flex flex-col   border-b border-gray-200 w-full">
              <span className="text-gray-400 text-xs"> Address Line 2</span>
              <span className="text-xs">California</span>
            </div>
            <div className="flex  justify-start gap-48 border-b  border-gray-200 w-full">
              <span className="  flex flex-col  ">
                <span className="text-gray-400 text-xs">Country</span>
                <span className="text-xs">INDIA</span>
              </span>
              <span className="flex flex-col  pl-2">
                <span className="text-gray-400 text-xs">State</span>
                <span className="text-xs">TELANGANA</span>
              </span>
            </div>
            <div className="flex  justify-start gap-40  border-b border-gray-200 w-full">
              <span className="  flex flex-col  ">
                <span className="text-gray-400 text-xs">City</span>
                <span className="text-xs">HYDERABAD</span>
              </span>
              <span className="flex flex-col  pl-4">
                <span className="text-gray-400 text-xs">Zipcode</span>
                <span className="text-xs">500053</span>
              </span>
            </div>
          </div>
        </div>
        <button
          className="w-[70%] lg:mt-6 h-8 bg-[#1890FF] hover:bg-blue-600 transition-all text-white items-end"
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

export default PreviewCompany;
