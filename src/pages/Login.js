import React from 'react'
import Template from '../Components/Template'
import LoginImg from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="WELCOME BACK"
      desc1="Build skills for today,tomorrow,and beyound."
      desc2="Education to future-proof your carrer."
      image={LoginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login