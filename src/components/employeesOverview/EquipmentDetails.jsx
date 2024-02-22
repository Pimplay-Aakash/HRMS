import React from 'react'
import EquipmentCard from './EquipmentCard'

const EquipmentDetails = () => {
  return (
    <div className='flex flex-wrap gap-5 p-4'> 
        <EquipmentCard/>
        <EquipmentCard/>
        <EquipmentCard/>
        <EquipmentCard/>
        <EquipmentCard/>
    </div>
  )
}

export default EquipmentDetails