import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'
import "./Register.css"

const Register = () => {
  return (
    <div>
      <div className="register">

        <form className='register_form'>
          <div className="register_title">Register</div>
          <label htmlFor="name">Name</label>
          <input className='name' type="text" name="name" id="name" />
          <label htmlFor="username">Username</label>
          <input className='username' type="text" name="username" id="username" />
          <label htmlFor="email">Email</label>
          <input className='email' type="email" name="email" id="email" />
          <label htmlFor="password">Enter password</label>
          <input className='password' type="password" name="password" id="password" />
          <label htmlFor="confirmPassword">Confirm password</label>
          <input className='password' type="password" name="confirmPassword" id="password" />
          <button className='register_btn' type="submit">Register</button>
          <p className="register_text">Already part of the community?{" "}<a href="/login">Login <FiArrowRightCircle /></a></p>
        </form>
      </div>
    </div>
  )
}

export default Register
