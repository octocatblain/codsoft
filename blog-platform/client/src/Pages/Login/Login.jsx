import { Link } from "react-router-dom"
import Layout from "../../Layout/Layout"
import "./Login.css"

const Login = () => {
    return (
        <Layout>
            <div className="login_page">
                <p className="login_subtitle">Welcome back!</p>
                <h1 className="login_title">Login</h1>
                <form action="" className="login_form">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter Your Username" />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Your Password" />

                    <button type="submit" className="login_btn">Login</button>
                </form>
                <Link to="/register"><button type="submit" className="login_register_btn">Register</button></Link>
            </div>
        </Layout>
    )
}

export default Login
