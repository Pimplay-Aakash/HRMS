import DocumentCard from "@/components/employeesOverview/DocumentCard";
import EquipmentCard from "@/components/employeesOverview/EquipmentCard";
import EquipmentDetails from "@/components/employeesOverview/EquipmentDetails";
import PersonalInfo from "@/components/employeesOverview/PersonalInfo";
import ProfessionalInfo from "@/components/employeesOverview/ProfessionalInfo";
import React from "react";
import { RiEditFill } from "react-icons/ri";
import Image from "next/image";
import ProfImg from "@/../public/assets/empDetails/Avatar1.svg";
import Invite from "./invite/Invite";
const page = ({ tab, setTab }) => {
  return (
    <div className="p-10 bg-gray-200">
      <div className="w-full mb-5 p-5 bg-white">
        <div className="flex justify-between w-full mb-4">
          <p className="font-medium text-xl">Personal Information</p>
          <div className="flex items-center gap-4">
            <button className="flex items-center border px-5 py-2">
              <RiEditFill />
              <p>Edit</p>
            </button>
            {/* <button className="bg-[#1890FF] text-white px-4 py-2">
              <p>Finished</p>
            </button> */}
            <Invite/>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Image src={ProfImg} className="w-[100px] " />
          <PersonalInfo />
        </div>
      </div>

      <div className="mb-5 p-5 bg-white">
        <div className="flex justify-between w-full mb-4 ">
          <p className="font-medium text-xl">Professional Information</p>
          <div className="flex items-center gap-4">
            <button className="flex items-center border px-5 py-2">
              <RiEditFill />
              <p>Edit</p>
            </button>
          </div>
        </div>
        <ProfessionalInfo />
      </div>

      <div className="mb-5 p-5 bg-white">
        <div className="flex justify-between w-full mb-4">
          <p className="font-medium text-xl">Equipment Details</p>
          <div className="flex items-center gap-4">
            <button className="flex items-center border px-5 py-2">
              <RiEditFill />
              <p>Edit</p>
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <EquipmentCard />
          <EquipmentCard />
        </div>
      </div>

      <div className="mb-5 p-5 bg-white">
        <div className="flex justify-between w-full mb-4">
          <p className="font-medium text-xl">Documents</p>
          <div className="flex items-center gap-4">
            <button className="flex items-center border px-5 py-2">
              <RiEditFill />
              <p>Edit</p>
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <DocumentCard />
          <DocumentCard />
        </div>
      </div>
    </div>
  );
};

export default page;
