import { Link } from "react-router-dom"
import Layout from "../../Layout/Layout"
import "./Register.css"

const Register = () => {
    return (
        <Layout>
            <div className="register_page">
                <h1 className="register_title">Register</h1>
                <form action="" className="register_form">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" name="fullname" id="fullname" placeholder="Enter Your Full Name" />

                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter Your Username" />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter Your Email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Your Password" />

                    <label htmlFor="password">Password Confirmation</label>
                    <input type="password" name="password" id="password" placeholder="Confirm Your Password" />

                    <button type="submit" className="register_btn">Register</button>
                </form>
                <Link to="/login"><button type="submit" className="register_login_btn">Login</button></Link>
            </div>
        </Layout>
    )
}

export default Register
