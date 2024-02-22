// 
'use client'

// ProfessionalForm.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfessionalDetails, selectProfessionalDetails,setDropdownOption} from '../../../../redux/slices/profDetails'

import { Form, Input, Button, Select, Col, Row } from 'antd';

import { useRouter } from 'next/navigation';
const { Option } = Select;
const numberRegex = /^[0-9]{5,}$/; // Ensure at least 5 digits

const ProfessionalInfo = ({ tab, setTab }) => {
  const dispatch = useDispatch();
  const professionalDetails = useSelector(selectProfessionalDetails);

  const handleChange = (name, value) => {
    dispatch(updateProfessionalDetails({ [name]: value }));
  };

  const handleSubmit = () => {
    // Save data to local storage
    localStorage.setItem(
      "professionalDetails",
      JSON.stringify(professionalDetails)
    );
    alert("data stored in local storage");
  };
  const handleSelectChange = (value) => {
    dispatch(setDropdownOption(value));
  };
  const { selectedOption } = useSelector(selectProfessionalDetails);

  const router = useRouter();
  return (
    <Form
      style={{ padding: "20px", margin: "auto", border: "2px solid #eee" }}
      className=" justify-center items-center w-[80%] "
      onFinish={handleSubmit}
      // Adjust the span value based on your layout
      // Adjust the span value based on your layout
    >
      <Form.Item
        label="Designation"
        name="designation"
        rules={[{ required: true, message: "Please select a designation." }]}
      >
        <Select
          className="rounded-none h-11 font-semibold mb-5  w-[25rem]"
          placeholder="Select Designation"
        >
          <Option value="option10">Option 10</Option>
          <Option value="option11">Option 11</Option>
          <Option value="option12">Option 12</Option>
        </Select>
      </Form.Item>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="PF No"
            name="pfNumber"
            rules={[
              { required: true, message: "Please enter a PF number." },
              {
                pattern: numberRegex,
                message: "Please enter at least 5 digits for PF number.",
              },
            ]}
          >
            <Input
              className="h-11"
              type="text"
              value={professionalDetails.pfNumber}
              onChange={(e) => handleChange("pfNumber", e.target.value)}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="UAN No"
            name="uanNumber"
            rules={[
              { required: true, message: "Please enter a UAN number." },
              {
                pattern: numberRegex,
                message: "Please enter at least 5 digits for UAN number.",
              },
            ]}
          >
            <Input
              className="h-11"
              type="text"
              value={professionalDetails.uanNumber}
              onChange={(e) => handleChange("uanNumber", e.target.value)}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="Department"
        name="department"
        rules={[{ required: true, message: "Please select a department." }]}
      >
        <Select
          placeholder="Select Department"
          className="rounded-none mb-5 font-semibold h-11"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Reporting Manager"
        name="reportingManager"
        rules={[
          { required: true, message: "Please select a reporting manager." },
        ]}
      >
        <Select
          placeholder="Select Reporting Manager"
          className="h-11 rounded-none mb-5"
        >
          <Option value="option4">Option 4</Option>
          <Option value="option5">Option 5</Option>
          <Option value="option6">Option 6</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Work Location"
        name="workLocation"
        rules={[{ required: true, message: "Please select a work location." }]}
      >
        <Select
          placeholder="Select Work Location"
          className="h-11 rounded-none"
        >
          <Option value="option7">Option 7</Option>
          <Option value="option8">Option 8</Option>
          <Option value="option9">Option 9</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button
          onClick={() => {
            setTab(tab + 1);
          }}
          type="primary"
          htmlType="submit"
          className="rounded-none w-full h-14 bg-blue-600"
        >
          Next
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfessionalInfo;