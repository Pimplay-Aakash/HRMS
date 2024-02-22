import React, { useState, useRef } from "react";
import { Button, Radio, Input, Form, Select, Option } from "antd";
// import { AiFillEdit } from "react-icons/ai";
import Link from "next/link";
import { IoSaveSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Orgdetails from "./Orgdetails";

const Editorgdetails = () => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxWidth = 100; // Specify the maximum width here
        const maxHeight = 100; // Specify the maximum height here
        let width = img.width;
        let height = img.height;

        // Calculate new dimensions while maintaining aspect ratio
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);

  const [edit, setEdit] = useState(true);

  return (
    <>
      {edit ? (
        <div className="h-full w-full flex flex-col gap-5 p-2">
          <div className="flex justify-between items-center ">
            <h2 className="text-xl font-bold">Edit Organizational Details </h2>
            <div className="flex gap-2 items-center">
              <Button
                className=" hover:bg-blue-50 rounded-md"
                onClick={() => {
                  setEdit(false);
                }}
              >
                Cancle
              </Button>
              <button
                className="bg-blue-500 text-white flex gap-2 items-center rounded-sm border hover:text-blue-500 hover:bg-white hover:border-blue-500 transition-all px-3 p-1"
                onClick={() => {}}
              >
                <IoSaveSharp className="text-lg" /> Save
              </button>
            </div>
          </div>
          <div className="w-full  flex gap-5 justify-between">
            <div className="p-3 flex flex-col gap-4 w-[65%] min-h-full bg-white shadow-md">
              <h3 className="text-lg font-semibold">Personal Information </h3>

              <form className="flex  flex-col gap-5">
                <div className="w-full flex justify-between gap-5">
                  <input
                    type="text"
                    placeholder="Synectiks India Private LTD"
                    className=" border border-gray-400 p-2 w-[50%] placeholder:text-black outline-none bg-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className=" border border-gray-400 p-2 w-[50%] placeholder:text-black outline-none bg-transparent"
                  />
                </div>
                <div className=" border border-gray-400 p-2 w-full bg-transparent ">
                  Civa.30051@example.com
                </div>
                <p className="text-sm">
                  to change your email please{" "}
                  <Link href="abcd " className="text-blue-300">
                    Contact Support
                  </Link>{" "}
                </p>
                <div className="w-full flex justify-between gap-5">
                  <input
                    type="text"
                    placeholder="Level 6, Phase 2, N Heights"
                    className="w-[50%] p-2 outline-none  placeholder:text-black border border-gray-400 "
                  />
                  <input
                    type="text"
                    placeholder="040-4567823"
                    className="w-[50%] p-2 outline-none  placeholder:text-black border border-gray-400 "
                  />
                </div>
                <div className="w-full flex justify-between gap-5">
                  <input
                    type="text"
                    placeholder="Hitech City"
                    className="w-[50%] p-2 outline-none  placeholder:text-black border border-gray-400 "
                  />

                  <select
                    name="country"
                    id=""
                    className="w-[50%] p-2 bg-transparent placeholder:text-black border border-gray-400 outline-none"
                  >
                    <option value="India">India</option>
                  </select>
                </div>
                <div className="w-full flex justify-between gap-5">
                  <select
                    name="city"
                    id=""
                    className="w-[50%] p-2 bg-transparent placeholder:text-black border border-gray-400 outline-none"
                  >
                    <option value="Hyderabad">Hyderabad</option>
                  </select>
                  <select
                    name="state"
                    id=""
                    className="w-[50%] p-2 bg-transparent placeholder:text-black border border-gray-400 outline-none"
                  >
                    <option value="Telangana">Telangana</option>
                  </select>
                </div>
                <div className="w-full flex justify-between gap-5">
                  <input
                    type="text"
                    placeholder="500081"
                    className="w-[50%] p-2 outline-none placeholder:text-black border border-gray-400 "
                  />
                </div>
              </form>
            </div>
            <div className="w-[30%] h-fit bg-white px-2 py-6 flex flex-col gap-5 items-center justify-between shadow-md">
              <div className="profile w-20 h-20 bg-yellow-500 rounded-full flex justify-center items-center">
                <span className="text-lg text-orange-600 ">PK</span>
              </div>
              <div className="flex flex-col items-center">
                <span>Add your Company Logo</span>
              </div>
              <div className="image-upload-container">
                <div className="w-full flex justify-center items-center flex-col">
                  <label
                    htmlFor="image-upload-input"
                    className="image-upload-label cursor-pointer bg-blue-400 text-white p-2 rounded-sm"
                  >
                    {image ? image.name : "Add a Photo"}
                  </label>
                  <div style={{ cursor: "pointer" }}>
                    {image ? (
                      <img
                        src={URL.createObjectURL(image)}
                        alt="upload image"
                        className="img-display-after"
                        style={{ width: "100px", height: "100px" }}
                      />
                    ) : (
                      ""
                    )}
                    <input
                      id="image-upload-input"
                      type="file"
                      onChange={handleImageChange}
                      ref={hiddenFileInput}
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Orgdetails />
      )}
    </>
  );
};

export default Editorgdetails;
