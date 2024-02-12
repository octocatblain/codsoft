import "./Navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { BiXCircle } from "react-icons/bi"
import { useState } from "react"

const Navbar = () => {

    const [isResponsive, setIsResponsive] = useState(false)

    
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
                <BiXCircle className="icon close_icon" />
            </ul>
            <FaBars className="icon menu_icon" />

        </div>
    )
}

export default Navbar
