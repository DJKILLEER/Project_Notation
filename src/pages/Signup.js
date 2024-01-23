import React from 'react'
import SignupImg from '../assets/signup.png'
import Template from '../Components/Template'


const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Join the millions learning to code with studyNotion for Free"
      desc1="Build skills for today,tomorrow,and beyound."
      desc2="Education to future-proof your carrer."
      image={SignupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup