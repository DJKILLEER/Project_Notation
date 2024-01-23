import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Signupform = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formdata, setfromdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [showpassword, setshowpassword] = useState(false);
  const [showConfrimpassword, setConfirmpassword] = useState(false);
  const [accounttype, setaccounttype] = useState("student");

  function changeHander(event) {
    setfromdata((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formdata.password !== formdata.confirmpassword) {
      toast.error("Password does not Match");

      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formdata
    };
    
    const finalData = {
      ...accountData,
      accounttype
    }

console.log("printing data")
console.log(finalData)
    navigate("/dashboard");
  }

  return (
    <div>
      {/* Students-Insturtor tab */}
      <div className="flex rounded-full bg-richblack-800 p-1 gap-x-1 my-6 max-w-max ">
        <button
          className={`${
            accounttype === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setaccounttype("student")}
        >
          Student
        </button>

        <button
          className={`${
            accounttype === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setaccounttype("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first name and last name  */}
        <div className="flex justify-between mt-[10px]">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
              type="text"
              required
              name="firstname"
              onChange={changeHander}
              placeholder="Enter First Name"
              value={formdata.firstname}
            />
          </label>
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
              type="text"
              required
              name="lastname"
              onChange={changeHander}
              placeholder="Enter First Name"
              value={formdata.lastname}
            />
          </label>
        </div>
        <div className="mt-[20px]">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
              type="dmail"
              required
              name="email"
              onChange={changeHander}
              placeholder="Enter Email Address"
              value={formdata.email}
            />
          </label>
        </div>

        {/* create pass and confirm password  */}
        <div className="flex justify-between mt-[10px]">
          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
              type={showpassword ? "text" : "password"}
              required
              name="password"
              onChange={changeHander}
              placeholder="Enter password"
              value={formdata.password}
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setshowpassword((prev) => !prev)}
            >
              {showpassword ? (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
              type={showConfrimpassword ? "text" : "password"}
              required
              name="confirmpassword"
              onChange={changeHander}
              placeholder="Comfirm password"
              value={formdata.confirmpassword}
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setConfirmpassword((prev) => !prev)}
            >
              {showConfrimpassword ? (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signupform;
