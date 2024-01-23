import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'


const Loginform = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [fromdata,setfromdata] = useState({
        email: "",
        password: ""
    });

    const [showpassword,setshowpassword] = useState(false);

function changeHander(event){
  setfromdata( (prevData)=>(
    {
        ...prevData,
       [ event.target.name]: event.target.value
    }
  ))
}

function submitHandlder(event){
  event.preventDefault();
  setIsLoggedIn(true);
  toast.success("Logged In")
  navigate("/dashboard")
}

  return (
  <form onSubmit={submitHandlder} className='flex flex-col w-full gap-y-4 mt-6'>
    <label className='w-full' >
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup> </p>
        <input type="email" value={fromdata.email}  onChange={changeHander} placeholder='Enter email Address' name='email' required 
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
    </label>
    <label className='w-full relative'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password <sup className='text-pink-200'>*</sup> </p>
        <input  type={showpassword? ("text") : ("password")} value={fromdata.password}  onChange={changeHander} name='password' placeholder='Enter Password' required
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '/>
<span 
className='absolute right-3 top-[38px] cursor-pointer'
onClick={()=> setshowpassword((prev)=> !prev)} >
    {showpassword? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
    
    :(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
</span>

<Link to="#" >
    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
        Forgot Password
    </p>
</Link>
    </label>

    <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
        Sign In
    </button>
  </form>
  )
}

export default Loginform