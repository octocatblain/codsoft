import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'
import "./Login.css"

const Login = () => {
  return (
    <div>
      <div className="login">

        <form className='login_form'>
          <div className="login_title">Login</div>
          <label htmlFor="username">Username</label>
          <input className='username' type="text" name="username" id="username" />
          <label htmlFor="password">Password</label>
          <input className='password' type="password" name="password" id="password" />
          <button className='login_btn' type="submit">Login</button>
          <p className="register_text">Not yet registed?{" "}<a href="/register">Register here <FiArrowRightCircle /></a></p>
        </form>
      </div>
    </div>
  )
}

export default Login
