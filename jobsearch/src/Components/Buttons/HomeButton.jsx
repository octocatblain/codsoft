import React from 'react'
import { IoHome } from "react-icons/io5";
import "./Buttons.css"


const HomeButton = () => {
    return (
        <a className='home_link' title='←back Home' href="/" > <IoHome className='home_icon'/></a >
    )
}

export default HomeButton
