import React from 'react'
import "./Layout.css"
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

function Layout({ children }) {
    return (
        <div className='main'>
            <Navbar />
            <div className='layout_body'>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout
