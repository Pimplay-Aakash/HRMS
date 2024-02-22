import React from 'react'
import { FiEye } from "react-icons/fi";
import { CiSaveDown1 } from "react-icons/ci";

const DocumentCard = () => {
  return (
    <div className='flex items-center justify-between w-[22%] p-3 rounded-lg border border-gray-400'>
        <p className='text-md font-medium'>Appointment Letter.pdf</p>
        <span className='flex gap-2'>
            <FiEye className='text-lg '/>
            <CiSaveDown1 className='text-lg font-bold'/>
        </span>
    </div>  )
}

export default DocumentCard