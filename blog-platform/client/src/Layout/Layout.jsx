import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
      <div>{children}</div>
    </div>
  )
}

export default Layout
