"use client"
import React, { useState } from 'react';
import { Tabs } from 'antd';
// import TopNav from './TopNav';
import { IoMdPerson } from "react-icons/io";
// import Image from "next/image"
import Customfeilds from './customfields/customfeilds';
import Orgdetails from './organizationdetails/Orgdetails';
// import ProjectIcon from "@/../../public/assets/Projects.svg"
// import AllProjects from './AllProjects';
const Organizationdetails = () => {
  const [tabPosition, setTabPosition] = useState('left');
  const [activeTab, setActiveTab] = useState('1');

  const tabContents = {
    '1': <Orgdetails />,
    '2': <Customfeilds/>,
  };

  const changeActiveTab = (key) => {
    setActiveTab(key)
  }

  return (
    <div>
      
      <Tabs
        tabPosition={tabPosition}
        activeKey={activeTab}
        onTabClick={(key) => changeActiveTab(key)}
       
        tabBarStyle={{ width: '15%' }}
      >
        <Tabs.items tabBarStyle={{color:'red'}} tab={
            <span className='p-2 w-full'>Organization Details </span>
        } key="1" >
          {tabContents['1']}
        </Tabs.items>
        <Tabs.items tab={
            <span className='p-2 w-full'>
              custom fields</span>
        } key="2">
          {tabContents['2']}
        </Tabs.items>
      </Tabs>
    </div>
  );
};

export default Organizationdetails;



