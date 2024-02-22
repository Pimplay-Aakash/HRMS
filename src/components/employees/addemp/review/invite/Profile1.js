import React, { useRef, useState } from 'react';
import { Input, Radio, Space } from 'antd';

const profile1 = ({ step, setStep }) => {
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
  };
return (
    <>
<div className=''>
<p className='text-center font-medium text-2xl '>Create profile and invite</p>
<p className='text-center'>when do you want james harper to receive an invitation to join </p>
<Radio.Group onChange={onChange} className=''>
<Space direction="vertical" className='mt-8'>
  <div  className=' border-1 w-[470px] p-2 rounded-md '>  <Radio value={1} onChange={() => { setStep(step + 1) }}>Immediately</Radio></div>
  <div className=' border-1 w-[470px] p-2 rounded-md '>  <Radio value={2} onChange={() => { setStep(step + 2) }}>Not Now</Radio></div>
  <div className=' border-1 w-[470px] p-2 rounded-md '>  <Radio value={3} onChange={() => { setStep(step + 3) }} >Schedule invite</Radio></div>
</Space>
</Radio.Group>
</div>
 </>
)
}

export default profile1