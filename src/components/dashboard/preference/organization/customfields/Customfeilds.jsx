import React, { useState } from "react";
import Editcustomfields from "./Editcustomfields";
import { GoPlus } from "react-icons/go";

const Customfeilds = () => {
  const HandleEdit = () => {
    console.log("cliked edit");
    setEdit(!edit);
  };
  const [edit, setEdit] = useState(false);
  return (
    <>
      {!edit ? (
        <div className="p-10">
          <div className="flex items-end justify-between mb-14">
            <span>
              <h2 className="font-semibold text-lg">Custom Field</h2>
              <p>
                Define supplementary information that can be added to workers'
                personal profiles or contracts.
              </p>
            </span>
            <button
              className="flex items-center gap-1 bg-[#1890FF] text-white py-2 px-3 rounded-sm border hover:text-blue-500 hover:bg-white hover:border-blue-500 transition-all"
              onClick={HandleEdit}
            >
              <GoPlus /> Add field
            </button>
          </div>
          <table className="w-full text-start">
            <thead className="border-b border-gray-300">
              <tr>
                <td className="font-semibold p-4">Field Name</td>
                <td className="font-semibold">Input Type</td>
                <td className="font-semibold">Status</td>
              </tr>
            </thead>
            <tbody>
              <tr className="p-2 border-b border-gray-300">
                <td className="p-4">Designation</td>
                <td>Select</td>
                <td>
                  <p className="bg-[#F6FFED] text-[#7CB305] w-20 px-5 py-1 flex justify-center items-center rounded-md">
                    Active
                  </p>
                </td>
              </tr>
              <tr className="p-2 border-b border-gray-300">
                <td className="p-4">Country</td>
                <td>Multi Select</td>
                <td>
                  <p className="bg-[#F6FFED] text-gray-700 w-20 px-5 py-1 flex justify-center items-center rounded-md">
                    Inactive
                  </p>
                </td>
              </tr>
              <tr className="p-2 border-b border-gray-300">
                <td className="p-4">State</td>
                <td>Multi Select</td>
                <td>
                  <p className="bg-[#F6FFED] text-[#7CB305] w-20 px-5 py-1 flex justify-center items-center rounded-md">
                    Active
                  </p>
                </td>
              </tr>
              <tr className="p-2 border-b border-gray-300">
                <td className="p-4">City</td>
                <td>Select</td>
                <td>
                  <p className="bg-[#F6FFED] text-[#7CB305] w-20 px-5 py-1 flex justify-center items-center rounded-md">
                    Active
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <Editcustomfields />
      )}
    </>
  );
};

export default Customfeilds;
