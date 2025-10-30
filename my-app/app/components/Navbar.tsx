import React, { useEffect, useState } from "react";
import { IoLogoPython, IoMoonOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false)
  useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if(scrollY > 50){
            setIsScroll(true)
        }else{
          setIsScroll(false)
        }
      })
  },[])

  return (
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""} `}>
      {/* Logo */}
      <a href="#top">
        <p className="w-10 h-10 cursor-pointer mr-4 font-bold text-3xl">ELYAS&trade;</p>
      </a>

      {/* Desktop Menu */}
      <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} `}>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#work">My Work</a></li>
        <li><a href="#contact">Contact me</a></li>
      </ul>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4">
        <button aria-label="Toggle dark mode">
          <IoMoonOutline className="w-6 h-6" />
        </button>

        <a
          href="#contact"
          className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
        >
          Contact <MdArrowOutward className="w-3" />
        </a>

        {/* Mobile Menu Button */}
        <button
          aria-label="Open menu"
          className="block md:hidden ml-3"
          onClick={() => setMenuOpen(true)}
        >
          <RiMenu3Fill className="w-6 h-6 cursor-pointer" />
        </button>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-all duration-500 ${
          menuOpen ? "right-0" : "right-[-100%]"
        }`}
      >
        <button
          aria-label="Close menu"
          className="absolute right-6 top-6"
          onClick={() => setMenuOpen(false)}
        >
          <RxCross2 className="w-5 h-5 cursor-pointer" />
        </button>

        <ul className="flex flex-col gap-4">
          <li><a href="#top" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About me</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#work" onClick={() => setMenuOpen(false)}>My Work</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact me</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
