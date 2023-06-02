import React from 'react'
import NavBar from '../Components/NavBar'
import Details from '../Components/Details'
import Footer from '../Components/Footer'
import ViewAll from '../Components/ViewAll'
import All from '../Components/All'

function Review() {
  return (
    <div>
    <div className="fixed top-0 z-10 w-[100%] m-auto ">
<NavBar/>
    </div>
    <div className="w-[100%] bg-slate-100  mt-14">
    <ViewAll/>
    </div>
    <div className="bottom-0 w-[100%] bg-slate-100  m-auto">
    <Footer/>
    </div>
    </div>
  )
}

export default Review