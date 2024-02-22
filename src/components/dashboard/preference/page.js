"use client";
import React from "react";
import { Tabs } from "antd";
import PersonalDetails from "./personaldetails/Personaldetails";
import Orgdetails from "./organization/organizationdetails/orgdetails";
import Organizationdetails from "./organization/Organizationdetails";
const Preference = () => {
  return (
    <Tabs defaultActiveKey="1" className="px-2">
      <Tabs.TabPane tab="Personal Informaton" key="1">
        <PersonalDetails />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Organizational Information" key="2">
        {/* <Orgdetails/> */}
        <Organizationdetails />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Security " key="3">
        {/* <Organizationdetails/> */}
      </Tabs.TabPane>
      <Tabs.TabPane tab="Notifications " key="4"></Tabs.TabPane>
    </Tabs>
  );
};

export default Preference;
