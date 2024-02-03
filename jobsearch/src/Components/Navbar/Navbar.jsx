import "./Navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <h1 className="title">Job<span>Search</span></h1>
            </div>

            <ul className="nav_menu">
                <li className="nav_item"><Link to="/">Home</Link></li>
                <li className="nav_item"><Link to="/companies">Companies</Link></li>
                <li className="nav_item"><Link to="/about">About</Link></li>
                <li className="nav_item"><Link to="/blog">Blog</Link></li>
                <li className="nav_item"><Link to="/contact">Contact</Link></li>
                <li className="nav_item"><Link to="/login">Login</Link></li>
                <li className="nav_item"><Link to="/register">Register</Link></li>

            </ul>

        </div>
    )
}

export default Navbar
