import { Button } from "antd";
import React, { useState } from "react";
import { IoSave } from "react-icons/io5";
import { IoSaveSharp } from "react-icons/io5";
Button;
import Customfeilds from "./Customfeilds";
const Editcustomfields = () => {
  const [edit, setEdit] = useState(true);

  return (
    <>
      {edit ? (
        <div className=" flex flex-col justify-between gap-5 p-2">
          <div className="flex justify-between items-center gap-5 ">
            <h2 className="text-xl font-bold">Edit Personal Details </h2>
            <div className="flex gap-2 items-center">
              <Button
                className=" hover:bg-blue-50 rounded-md"
                onClick={() => {
                  setEdit(false);
                }}
              >
                Cancle
              </Button>
              <button className="bg-blue-500 text-white flex gap-2 items-center rounded-sm border hover:text-blue-500 hover:bg-white hover:border-blue-500 transition-all px-3 p-1">
                <IoSaveSharp className="text-lg" /> Save
              </button>
            </div>
          </div>
          <div className="flex font-medium text-base flex-col bg-white p-6 mb-5 shadow-md">
            <div className="mb-6">
              <label htmlFor="file">New File :</label>
              <input
                type="text"
                placeholder="Designation"
                id="file"
                className="p-2 w-[30%] outline-[#1890FF] ml-20 border border-gray-300 rounded-sm"
              />
            </div>
            <div>
              <label htmlFor="file">New File :</label>
              <select
                type="text"
                placeholder="Select"
                id="file"
                className="p-2  w-[30%] outline-[#1890FF] ml-20 border border-gray-300 rounded-sm"
              >
                <option value="" disabled selected className="text-gray-300">
                  Select
                </option>
                <option value="first">first</option>
                <option value="second">second</option>
              </select>
            </div>
          </div>

          <h3 className="font-medium text-base mb-5 p-3">Add steps</h3>

          <div className="flex flex-col bg-white p-6 shadow-md">
            <div className="mb-8 flex items-center justify-between w-full ">
              <span className="flex items-center w-full">
                <label htmlFor="file">Step 1 :</label>
                <input
                  type="text"
                  placeholder="1"
                  id="file"
                  className="p-2 w-[30%] outline-[#1890FF] ml-20 border border-gray-300 rounded-sm"
                />
              </span>

              <button className="flex items-center gap-2 p-3 rounded-md text-lg hover:bg-white border hover:border-blue-500 hover:text-blue-500 transition-all text-white px-6 bg-[#1890FF] w-[250px] ">
                <IoSave />
                Add New Step
              </button>
            </div>
            <div>
              <label htmlFor="file">Step 2 :</label>
              <input
                type="text"
                placeholder="2"
                id="file"
                className="p-2 w-[30%] outline-[#1890FF] ml-20 border border-gray-300 rounded-sm"
              />
            </div>
          </div>
        </div>
      ) : (
        <Customfeilds />
      )}
    </>
  );
};

export default Editcustomfields;
