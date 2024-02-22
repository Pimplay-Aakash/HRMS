import React from 'react'

const ProfessionalInfo = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 ">
      {/* first row  */}
      <span className="mb-4">
        <h2 className="text-gray-400">Designation</h2>
        <p className="font-semibold text-base">UI/UX Designer</p>
      </span>
      <span>
        <h2 className="text-gray-400">Department</h2>
        <p className="font-semibold text-base">Design</p>
      </span>

      {/* second row  */}
      <span className="mb-4">
        <h2 className="text-gray-400">PF Number</h2>
        <p className="font-semibold text-base">22421364522</p>
      </span>
      <span>
        <h2 className="text-gray-400">UAN Number</h2>
        <p className="font-semibold text-base">3347412646</p>
      </span>

      {/* third row  */}
      <span className="mb-4">
        <h2 className="text-gray-400">Direct Reporting Manager</h2>
        <p className="font-semibold text-base">Papu Bhattacharya</p>
      </span>
      <span>
        <h2 className="text-gray-400">Work location</h2>
        <p className="font-semibold text-base">Hyderabad</p>
      </span>

    </div>
  )
}

export default ProfessionalInfo