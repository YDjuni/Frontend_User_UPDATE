import React from 'react'
import Kategori_M from '../Components/Kategori_M'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function K_makanan() {
  return (
    <div>
        <div className="fixed top-0 w-[100%] m-auto z-50">
            <NavBar/>
        </div>
        <div>
            <Kategori_M/>
        </div>
        <div className="  bottom-0 w-[100%] m-auto mt-28">
        <Footer />
      </div>
    </div>
  )
}

export default K_makanan