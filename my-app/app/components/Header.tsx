import React from "react";
import Image from "next/image";
import { IoMdHand } from "react-icons/io";
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.8, type: 'spring', stiffness: 100}}>
        <Image
        src="/profile2.jpg"
        alt=""
        width={200}
        height={200}
        className="rounded-full w-32"
      />
      </motion.div>
      <motion.h3 initial={{y: -20,opacity: 0}} whileInView={{y: 0,opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className="flex items-end gap-2 text-xl md:text-2xl mb-3 ">Hi! I'm ELYAS ALOWDIN  <IoMdHand className="w-6" /></motion.h3>
      <motion.h1 initial={{y: -30,opacity: 0}} whileInView={{y: 0,opacity: 1}} transition={{duration: 0.8, delay: 0.5}} className="text-3xl sm:text-6xl lg:text-[66px] font-bold ">WEB DEVELOPER. </motion.h1>
      <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.7}} className="max-w-2xl mx-auto">I’m a creative web developer who loves building modern, responsive, and user-focused websites.
        With a passion for design and clean code, I turn ideas into smooth digital experiences that inspire and perform.</motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a initial={{y: 30,opacity: 0}} whileInView={{y: 0,opacity: 1}} transition={{duration: 0.6, delay: 1}} href="#contact" className="px-10 py-3 border  rounded-full bg-black text-white  border-gray-500 flex items-center gap-2">Contact me </motion.a>
        <motion.a initial={{y: 30,opacity: 0}} whileInView={{y: 0,opacity: 1}} transition={{duration: 0.6, delay: 1.2}} href="#" className="px-10 py-3 border  rounded-full  border-gray-500 flex items-center gap-2">My Resume </motion.a>
      </div>
    </div>
  );
};

export default Header;
