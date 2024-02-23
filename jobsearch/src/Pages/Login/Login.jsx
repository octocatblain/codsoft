import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'
import "./Login.css"
import HomeButton from '../../Components/Buttons/HomeButton'
import { Link } from 'react-router-dom'

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
          <p className="register_text">Not yet registed?{" "}
            <Link className='register_link' to="/register"> Register<FiArrowRightCircle /> </Link>
          </p>
        </form>
      </div>

      <HomeButton />
    </div>
  )
}

export default Login
