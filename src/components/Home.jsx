import React from 'react'
import LandingPage from './LandingPage'
import Services from './Services'
import AboutUs from './AboutUs'
import Team from './Team'

function Home() {
  return (
    <div>
       <LandingPage/>
      <Services/>
      <AboutUs/>
      <Team/>
    </div>
  )
}

export default Home