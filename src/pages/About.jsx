import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Profil from '../Components/Profil'


function About() {
  return (
    <div>
        <div className="fixed top-0 w-[100%] m-auto z-50">
            <NavBar/>
        </div>
        <div className='mt-14'>
            <Profil/>
        </div>
        <div className="  bottom-0 w-[100%] m-auto mt-28">
        <Footer />
      </div>
    </div>
  )
}

export default About