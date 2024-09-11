import { useState } from "react";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='app h-screen w-full'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
