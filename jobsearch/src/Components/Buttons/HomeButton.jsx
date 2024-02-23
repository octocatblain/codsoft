import React from 'react'
import { IoHome } from "react-icons/io5";
import "./Buttons.css"
import { Link } from 'react-router-dom';


const HomeButton = () => {
    return (
        <Link className='home_link' title='←back Home' to="/" > <IoHome className='home_icon'/></Link >
    )
}

export default HomeButton
