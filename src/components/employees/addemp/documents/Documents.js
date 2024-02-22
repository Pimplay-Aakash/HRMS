// "use server"
"use client"
import React from 'react'
import Upload from './upload'
import { FaRegFileAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import {Progress, Table} from "antd"
import { AiFillDelete } from "react-icons/ai";
// import Delete from './Table';
// import FileTable from './FileTable';
import FileTable from './FileTable';



const Documents = ({tab,setTab}) => {

  return (
    <div className="w-full h-full p-10 flex flex-col ">
      <div>
        <Upload />
      </div>

      <div className="mt-10 border border-gray-400 p-4 rounded-xl">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="bg-[#E6F7FF] w-10 h-10 flex items-center justify-center rounded-full">
              <FaRegFileAlt />
            </div>
            <spam>
              <p>Educational Certificates 01</p>
              <p>1.2 MB</p>
            </spam>
          </div>
          <RxCross2 />
        </div>

        <Progress percent={20} showInfo={true} className="ml-12 w-[96%] " />
      </div>

      <p className="mt-6 font-semibold text-lg">Attach Files</p>
      <FileTable />

      <button
        className="w-[30%] bg-[#1890FF] text-white m-auto h-9 "
        onClick={() => {
          setTab(tab + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Documents