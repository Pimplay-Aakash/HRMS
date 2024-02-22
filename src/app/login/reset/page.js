import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import updateImage from '@/../../public/assets/login/updatesucessfull/update3.jpg'


const page = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-200  h-screen ">
        <div className="shadow-lg w-[400px] bg-white  p-9 flex flex-col justify-center items-center">
          <Image src={updateImage} className="self-center w-[12vw]" />
          {/* <p className=' flex justify-center'>image ?????</p> */}
          <p className="font-bold  text-2xl  text-center">
            Password Update <br /> successfully
          </p>
          <p className="text-sm font-extralight ml-4">
            Your password has been update successfully
          </p>
          <Link href="/login">
            <button className="bg-blue-500 text-white mt-4 w-[100%] p-2 ">
              Back to login
            </button>{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default page