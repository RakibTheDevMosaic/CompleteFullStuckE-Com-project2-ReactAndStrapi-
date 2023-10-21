import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import "./Layout.scss";
const Layout = () => {
  return (
    <div className='app'>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </div> 
  )
}

export default Layout
