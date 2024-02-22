import React from 'react';

const Profile5 = ({ step, setStep }) => {
    const handleBack = () => {
        setStep(step - 1); // Move back to the previous step
    };
    return (
        <>
            {/* <div className='flex flex-col items-center  bg-white w-[45vw] '> */}
            <h2 className='text-center font-semibold text-2xl mb-5'>Create profile and invite</h2>
            <p className='text-center text-md font-medium mb-4'>when do you want james harper to receive an invitation to join </p>

            <div className='flex justify-between font-normal text-md mb-3 bg-gray-200 p-3'>
                <p className=' text-gray-400'>Employee Name</p>
                <p>James harper</p>
            </div>
            <div className='flex justify-between font-normal text-md mb-3 bg-gray-200 p-3'>
                <p className=' text-gray-400'>Designation</p>
                <p>UI/UX Designer</p>
            </div>
            <div className='flex justify-between font-normal text-md mb-3 bg-gray-200 p-3'>
                <p className=' text-gray-400'>Email Address</p>
                <p>Jamesharper@synectiks.com</p>
            </div>
            <div className='flex justify-between font-normal text-md mb-3 bg-gray-200 p-3'>
                <p className=' text-gray-400'>Invitation</p>
                <p>Schedule invite
                </p>
            </div>
            <button className='bg-[#1890FF] w-[100%] mb-5 h-9 rounded-sm' >Confirm and Continue</button>
            <p className='mb-5 cursor-pointer text-center' onClick={handleBack} >Back</p>
            {/* </div> */}
        </>
    );
}

export default Profile5;
