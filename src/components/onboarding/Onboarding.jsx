
import Image from "next/image";
import UploadImg from "./UploadImg";
import { useRouter } from "next/navigation";
import OnBoardingImg from '@/../public/assets/onboarding/OnbordingImg.svg'
import Logout from '@/../public/assets/onboarding/Logout.svg'
// import { Progress, Flex, Segmented,Form , Select, Option, Input,InputNumber} from "antd";
import {
  Flex,
  Form,
  Input,
  InputNumber,
  Option,
  Progress,
  Segmented,
  Select,
  Item,
} from "antd";

import { UserOutlined } from "@ant-design/icons";
import { useState  } from "react"
import {useDispatch,useSelector} from "react-redux"
// import { createUser } from "@/redux/slices/personalDetails";
import { setPersonalData } from '@/redux/slices/personalDetails';



const Onboarding = ({ step, setStep }) => {

  // const personalData = useSelector((state) => state.personalDetails.personalData);


  const { Option } = Select;
  const router = useRouter();
  
  const [personal , setPersonal] = useState({})
  const dispatch = useDispatch()

  const getUserData = (e) =>{
    setPersonal({...personal, [e.target.name]: e.target.value})
    // console.log(personal);
  }

  const handleGenderChange = (selectedValue) => {
    setPersonal({ ...personal, gender: selectedValue });
  };

 const handleSubmit = async () => {
  // e.preventDefault();
  console.log("personal...", personal);
  
     dispatch(setPersonalData(personal));

};

  return (
    // <form onSubmit={} >
    <div  className="flex justify-center items-center gap-16 w-[100%] h-[100vh] p-10 ">
      <div className="md:w-[70vw] h-[88vh] rounded-2xl bg-[#E6F7FF] flex justify-center items-center">
        <Image
          width={100}
          height={100}
          src={OnBoardingImg}
          className="w-[60%]  "
        />
      </div>

      <div className="w-[50vw] h-[96vh] flex flex-col relative">
        <div className="flex  items-center p-1  border border-blue-500 hover:bg-blue-100 transition-all btn btn-primary w-[100px] absolute right-2 top-10 cursor-pointer">
          <Image width={15} height={15} src={Logout} />
          <button className="" onClick={()=>{
            router.push("/login")
          }}>Logout</button>
        </div>
          
        
        <div className="pt-16 flex flex-col">
          <p>Onboarding</p>
          <Progress percent={36} showInfo={false} />

          <span className="text-[#4F7396] text-sm mb">step 1 of 3</span>

          <h2 className="text-2xl mb-4 font-bold"> Personal Details</h2>

          <p className="text-md mb-4">
            Please provide your personal details, they will be used to complete
            your profile on Workflow App
          </p>

          <input
            name="firstname"
            placeholder="First name"
            className="p-1 mb-3 border border-gray-300 outline-blue-500 w-[70%] "
            onChange={getUserData}
            // value={personalData.firstname}
          />
          <input
            name="lastname"
            placeholder="Last name"
            className="p-1 mb-3 border border-gray-300 outline-blue-500 w-[70%]"
            onChange={getUserData}
          />

          <div className="mb-3">
            <Flex gap="small" align="flex-start" vertical>
              <Segmented
                name="gender"
                
                options={[
                  {
                    label: (
                      <div
                        style={{
                          padding: 4,
                          // color:"blue"
                        }}
                      >
                        <div>Mate</div>
                      </div>
                    ),
                    value: "Male",
                  },
                  {
                    label: (
                      <div
                        style={{
                          padding: 4,
                        }}
                      >
                        <div>Female</div>
                      </div>
                    ),
                    value: "Female",
                  },
                  {
                    label: (
                      <div
                        style={{
                          padding: 4,
                        }}
                      >
                        <div>Other</div>
                      </div>
                    ),
                    value: "Other",
                  },
                ]}
                onChange={handleGenderChange}
              />
            </Flex>
          </div>

          <input
            name="date"
            type="date"
            placeholder="Date of birth"
            className="p-1 mb-2 border border-gray-300 outline-blue-500 w-[70%]"
            onChange={getUserData}
          />

          <div>
            <Form className="flex border w-[70%]">
              <select className="w-20 h-9 ml-3">
                <option>+91</option>
                <option>+86</option>
              </select>
              <input
                name="number"
                type="number"
                className="w-full h-9 p-2 border-gray-300 outline-blue-500"
                onChange={getUserData}
              />
            </Form>
          </div>

          {/* this is from the uploadin the image  */}
          <div className="flex items-center gap-5 h-20 mt-4">
            <div className="">
              {/* <UploadImg /> */}
            </div>
            <div>
              <h2 className="border border-gray-300 p-1 pl-3">
                Upload Profile
              </h2>
              <p className="font-sm font-light">upload your profile picture</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-[70%] lg:mt-6 h-8 bg-[#1890FF] hover:bg-blue-600 transition-all text-white items-end"
            onClick={() => {handleSubmit(), console.log('hello'),setStep(step + 1)}}
          >
            Next
          </button>
        </div>
      </div>
    </div>
    // </form>
  );
};

export default Onboarding;
