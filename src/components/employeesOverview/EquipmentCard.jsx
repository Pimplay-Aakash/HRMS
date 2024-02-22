import React from 'react'
import { MdKeyboard } from "react-icons/md";

const EquipmentCard = () => {
  return (
    <div className='flex flex-col justify-between w-[32%] border border-gray-300 p-4'>
        <span className='flex gap-10 mb-4 items-center justify-between'>
            <span className='flex items-center gap-3'>
                <MdKeyboard  className='bg-[#BAE7FF] w-8 h-8 p-2 rounded-full'/>
                <p>Laptop</p>
            </span>
            
            <span className='flex text-gray-400 items-center gap-2'>Status :<p className="font-medium text-sm text-black">22/05/2023</p></span>
        </span>
        
        <div className='flex justify-between'>
            <span className="mb-4">
                <h2 className="text-gray-400">Model</h2>
                <p className="font-medium text-sm">Leveno Notebook</p>
            </span>
            <span>
                <h2 className="text-gray-400">Serial Number</h2>
                <p className="font-medium text-sm">LN1236/52333/123</p>
            </span>
            <span>
                <h2 className="text-gray-400">Own by</h2>
                <p className="font-medium text-sm">Organisation</p>
            </span>
        </div>

        <span>
            <h2 className="text-gray-400">Note</h2>
            <p className="font-medium text-sm">Assign monitor</p>
        </span>
        

    </div>
  )
}

export default EquipmentCard