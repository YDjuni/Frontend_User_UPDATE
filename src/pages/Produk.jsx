import React from 'react'
import Detail from '../Components/Details'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'

function Produk() {
  return (
    <div>
      <div className="fixed top-0 w-[100%] m-auto z-50 ">
        <NavBar />
      </div>
      <div className='mt-14'>
        <Detail />
      </div>
      <div className="bottom-0 w-[100%]   bg-slate-100  m-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Produk