import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Team from './components/Team'
import { Outlet } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll';

function App() {


const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-zinc-100 w-full h-screen text-white'>
      
      <Navbar/>
     <Outlet/>
      <Footer />
    </div>
  )
}
export default App