import React from 'react'
import NavBar from "../Components/NavBar";
import Footer from '../Components/Footer';
import Kategori_O from '../Components/Kategori_O';

function K_objek() {
  return (
    <div>
      <div className="fixed top-0 w-[100%] m-auto z-50">
        <NavBar />
      </div>
      <div>
        <Kategori_O/>
      </div>
      <div className="bottom-0 w-[100%] m-auto mt-28">
        <Footer />
      </div>
    </div>
  );
}

export default K_objek