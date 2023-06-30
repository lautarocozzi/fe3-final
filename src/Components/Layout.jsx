import React from 'react'
import Navbar from './Navbar'
import { Outlet,useLocation  } from 'react-router-dom'
import Footer from './Footer'
import Home from '../Routes/Home'
const Layout = () => {
  let location = useLocation();
  console.log(location.pathname) 
  
  return (
    <div> 
        <Navbar/>
        {location.pathname === '/' ? <Home/> : <Outlet/>}
        
        <Footer className='footer'/>
    </div>
  )
}

export default Layout