import React from "react";
import Image from "next/image";
import { IoMdHand } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <Image
        src="/profile2.jpg"
        alt=""
        width={200}
        height={200}
        className="rounded-full w-32"
      />
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 ">Hi! I'm ELYAS ALOWDIN  <IoMdHand className="w-6" /></h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-bold ">WEB DEVELOPER. </h1>
      <p className="max-w-2xl mx-auto">I’m a creative web developer who loves building modern, responsive, and user-focused websites.
        With a passion for design and clean code, I turn ideas into smooth digital experiences that inspire and perform.</p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact" className="px-10 py-3 border  rounded-full bg-black text-white  border-gray-500 flex items-center gap-2">Contact me </a>
        <a href="#" className="px-10 py-3 border  rounded-full  border-gray-500 flex items-center gap-2">My Resume </a>
      </div>
    </div>
  );
};

export default Header;
