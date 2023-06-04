import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Maps from "./pages/Maps";
import Review from "./pages/Review";
import Produk from "./pages/Produk";
import K_objek from "./pages/K_objek";
import K_makanan from "./pages/K_makanan";
import About from "./pages/About";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/K_objek" element={<K_objek />} />
        <Route path="/K_makanan" element={<K_makanan />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
