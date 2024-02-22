import React from "react";
import Image from "next/image";
import Img from "@/../../public/assets/empDetails/projectscard.svg";
import { MdOutlineWatchLater } from "react-icons/md";
// import { Image } from "next/image";
import img1 from "@/../../public/assets/empDetails/Avatar1.svg";
import img2 from "@/../../public/assets/empDetails/Avatar2.svg";
import img3 from "@/../../public/assets/empDetails/Avatar3.svg";

const ProjectsCard = () => {
  return (
    <div className="w-[22%] border rounded-sm shadow-md">
      <span className="flex items-center  gap-3  border-b-2 p-4 w-[100%] ">
        <span className="bg-[#BAE7FF] w-8 h-8 p-2 rounded-full flex items-center justify-center">
          <Image src={Img} alt="the icon from Procurement" />
        </span>

        <p className="font-medium text-lg">Procurement</p>
      </span>
      <div className="px-5 pt-5">
        <p className="mb-2 font-medium text-base">Total Use cases : 25</p>
        <p className="mb-2 ">8 Use cases in Progress</p>
        <span className="flex items-center gap-2">
          <MdOutlineWatchLater />
          <p>7 days</p>
        </span>
      </div>
      <div className="flex justify-between p-5">
        <p className="border mt-2 border-green-400 text-green-600 w-fit bg-green-50 p-1  h-8 rounded-sm flex items-center justify-center">
          Completed
        </p>
        <div className=" relative w-[30%] h-10 ">
          <Image src={img1} className="absolute left-1 top-2" />
          <Image src={img2} className="absolute left-6 top-2" />
          <Image src={img3} className="absolute left-10 top-0" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
