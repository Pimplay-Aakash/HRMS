"use client";
import React from "react";
import { Table, Breadcrumb } from "antd";
import Image from "next/image";
import Link from "next/link";
import Plus from "../../../../public/assets/homeicons/Union.svg";
import { useRouter } from "next/navigation";
import Avatar from "@/../public/assets/empDetails/Avatar1.svg";

const page = () => {
  const router = useRouter();
  const columns = [
    // {
    //   title: "Photo",
    //   dataIndex: "photo",
    // },
    {
      title: "Employee Name",
      dataIndex: "name",
    },
    {
      title: "Employee ID",
      dataIndex: "empId",
      sorter: {
        compare: (a, b) => a.empId - b.empId,
        multiple: 3,
      },
    },
    {
      title: "Email Address",
      dataIndex: "email",
      sorter: {
        compare: (a, b) => a.email - b.email,
        multiple: 2,
      },
    },
    {
      title: "Designation",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Employee type",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Start Date",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
  ];
  const data = [
    {
      key: "1",
      name: (
        <Link
          href="/hrms/employees/employeesOverView"
          className="flex gap-2 items-center text-black"
        >
          <Image src={Avatar} />
          John Brown
        </Link>
      ),
      empId: 60,
      email: "email@gmail.com",
      english: 70,
    },
    {
      key: "2",

      name: (
        <Link
          href="/hrms/employees/employeesOverView"
          className="flex gap-2 items-center text-black"
        >
          <Image src={Avatar} />
          John Brown
        </Link>
      ),
      empId: 55,
      email: "email@gmail.com",
      english: 89,
    },
    {
      key: "3",

      name: (
        <Link
          href="/hrms/employees/employeesOverView"
          className="flex gap-2 items-center text-black"
        >
          <Image src={Avatar} />
          John Brown
        </Link>
      ),
      empId: "1545454",
      email: "email@gmail.com",
      english: 70,
    },
    {
      key: "4",

      name: (
        <Link
          href="/hrms/employees/employeesOverView"
          className="flex gap-2 items-center  text-black"
        >
          <Image src={Avatar} />
          John Brown
        </Link>
      ),
      empId: 123526,
      email: "email@gmail.com",
      english: 89,
    },

    {
      key: "1",

      name: (
        <Link
          href="/hrms/employees/employeesOverView"
          className="flex gap-2 items-center text-black"
        >
          <Image src={Avatar} />
          John Brown
        </Link>
      ),
      empId: 143414,
      email: "email@gmail.com",
      english: 70,
    },
    {
      key: "2",

      name: (
        <Link
          href="/hrms/employees/employeesOverView"
          className="flex gap-2 items-center text-black"
        >
          <Image src={Avatar} />
          John Brown
        </Link>
      ),
      empId: 2421432,
      email: "email@gmail.com",
      english: 89,
    },
    {
      key: "3",

      name: (
        <Link
          href="/hrms/employees/employeesOverView"
          className="flex gap-2 items-center text-black"
        >
          <Image src={Avatar} />
          John Brown
        </Link>
      ),
      empId: 3242,
      email: "email@gmail.com",
      english: 70,
    },
    {
      key: "4",

      name: (
        <Link
          href="/hrms/employees/employeesOverView"
          className="flex gap-2 items-center text-black"
        >
          <Image src={Avatar} />
          John Brown
        </Link>
      ),
      empId: 233244,
      email: "email@gmail.com",
      english: 89,
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
    router.push("/hrms/employees/employeesOverView");
  };

  return (
    <div>
      <div className="flex justify-between p-4">
        <div className="flex flex-col gap-2">
          <Breadcrumb
            items={[
              {
                title: "Dashboard",
              },
              {
                title: <a href="">Employees</a>,
              },
            ]}
          />
          <h2 className="text-xl font-semibold">All Employees</h2>
        </div>
        <Link href={"/hrms/employees/addemp"}>
          <button className="bg-[#1890FF] hover:bg-blue-600 text-white flex p-4 gap-3 justify-center items-center">
            {" "}
            <Image src={Plus} /> Add New Employees{" "}
          </button>
        </Link>
      </div>
      {/* <Link href={"/employeesOverView"}> */}
      <Table columns={columns} dataSource={data} onChange={onChange} />
      {/* </Link> */}
    </div>
  );
};

export default page;
