"use client"

import React, { useState } from 'react';
import { Button, } from 'antd';

// import Form from './Form';
import { useRouter } from 'next/navigation';

import { Checkbox, DatePicker, Form, Input, Radio, Select } from "antd";



const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const handleFormSubmit = () => {

  localStorage.setItem("formData", JSON.stringify(formData));
};
const FormDisabledDemo1 = () => {
  const [formData, setFormData] = useState({
    providedBy: "",
    deviceType: "",
    manufacturer: "",
    serialNumber: "",
    notes: "",
    supplyDate: null,
  });
};


const Equipments = ({ tab, setTab }) => {
  const router = useRouter();

  const [componentDisabled, setComponentDisabled] = useState(true);

  return (
    <div>
      <div
        style={{
          padding: 24,
          minHeight: 100,
          //   background: colorBgContainer,
          background: "white",
          marginTop: 30,
          marginLeft: 10,
        }}
      >
        <div className=" flex gap-5">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/68/68792.png"
              className="h-8 w-10"
            ></img>
          </div>
          <div className="w-full">
            <h1 className="text-xl">
              <b>Equipment</b>
            </h1>
            <p className="text-gray-400 mt-1.5">
              Provide your own equipment and keep track of it for seemless work
              experiences
            </p>
          </div>
          <div>
            <Button type="primary" className="bg-blue-600 rounded-none mt-3">
              Add Equipment
            </Button>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: 24,
          minHeight: 300,
          //   background: colorBgContainer,
          background: "white",
          marginTop: 30,
          marginLeft: 10,
        }}
      >
        <div>
          {/* <Form /> */}
          <Checkbox
            checked={componentDisabled}
            onChange={(e) => setComponentDisabled(e.target.checked)}
          ></Checkbox>
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            disabled={componentDisabled}
            style={{
              maxWidth: 1000,
            }}
            onFinish={handleFormSubmit}
          >
            <Form.Item className="">
              Device Provided By:
              <Radio.Group
                onChange={(e) =>
                  setFormData({ ...formData, providedBy: e.target.value })
                }
              >
                <Radio value="org" className="ml-4 ">
                  Own by organization{" "}
                </Radio>
                <Radio value="worker">Own by Worker</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Device Type">
              <Select className="ml-10" placeholder="Laptop">
                <Select.Option value="menu1">1st menu item</Select.Option>
                <Select.Option value="menu2">2nd menu item</Select.Option>
                <Select.Option value="menu2">3rd menu item</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Manufacturer Name">
              <Input placeholder="Hp Laptop" className="rounded-none ml-10" />
            </Form.Item>

            <Form.Item label="Serial number">
              <Input placeholder="First Name" className="rounded-none ml-10" />
            </Form.Item>

            <Form.Item label="Notes">
              <TextArea rows={4} className="rounded-none ml-10" />
            </Form.Item>
            <Form.Item label="Supply Date">
              <DatePicker
                placeholder="Select date"
                className="rounded-none w-full ml-10"
              />
            </Form.Item>
            <div className="ml-80">
              <Button
                type="dashed"
                className="border-dashed border border-cyan-600 text-cyan-600 h-10 w-40 text-lg"
              >
                Add Items
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="rounded-none mt-3 bg-blue-600 h-10 w-40 text-lg ml-4"
                onClick={() => {
                  setTab(tab + 1);
                }}
              >
                Next
              </Button>
            </div>
          </Form>
        </div>
      </div>

      <div
        style={{
          padding: 24,
          minHeight: 120,
          //   background: colorBgContainer,
          background: "white",
          marginTop: 30,
          marginLeft: 10,
        }}
      >
        <div className=" flex gap-5">
          <div className="bg-cyan-400 h-12 w-16 rounded-full">
            <img
              src="https://www.iconpacks.net/icons/1/free-keyboard-icon-1405-thumb.png"
              className="rounded-xl h-8 w-8 ml-2 mt-1.5"
            ></img>
          </div>
          <div className="w-full">
            <h1 className="text-xl">
              <b>Keyboard</b>
            </h1>
            <p className="text-gray-400 mt-1.5">Model: ED12354</p>
            <p className="text-gray-400 mt-1.5">Serial number: 12365478KB</p>
            <p className="text-gray-400 mt-1.5">Supply date: 12/02/2024</p>
            <p className="text-gray-400 mt-1.5">Notes: Assign new keyboard</p>
          </div>
          <div>
            <Button type="primary" className="text-black rounded-none mt-3">
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipments;
