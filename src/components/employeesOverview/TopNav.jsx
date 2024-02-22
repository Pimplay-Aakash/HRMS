import React from 'react';
import { Tabs } from 'antd';
import Document from './Document';
import PersonalInfo from './PersonalInfo';
import ProfessionalInfo from './ProfessionalInfo';
import EquipmentDetails from './EquipmentDetails';


const items = [
  {
    key: '1',
    label: 'Personal Information',
    children:<PersonalInfo/>,
  },
  {
    key: '2',
    label: 'Professional Information',
    children: <ProfessionalInfo/>,
  },
  {
    key: '3',
    label: 'Equipment Details',
    children: <EquipmentDetails/>,
  },
  {
    key: '4',
    label: 'Document',
    children:  <Document/>,
  },
];
const TopNav = () => <Tabs defaultActiveKey="1" items={items} />;
export default TopNav;