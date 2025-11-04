import Image from 'next/image'
import { FaCode } from "react-icons/fa6";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaChrome } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "motion/react"
import React from 'react'

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-center mb-2 text-lg text-white'>Introduction</motion.h4>
      <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-center text-5xl font-bold text-white'>About me</motion.h2>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image
            src="/profile2.jpg"
            alt=""
            width={200}
            height={200}
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} className='flex-1'>
          <p className='mb-10 max-w-2xl text-white'>I’m a passionate web developer who loves transforming ideas into beautiful, functional, and responsive digital experiences.
            I specialize in frontend development using Next.js, React, and Tailwind CSS, and I’m constantly exploring new tools to make the web faster and more interactive.
            My goal is to build modern, clean, and user-friendly websites that not only look great but also deliver real value to users.
            When I’m not coding, I’m learning new technologies, improving my design sense, and working on side projects to sharpen my skills.</p>
          <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl'>
            <motion.li whileInView={{ scale: 1.05 }} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#1a003c]/50 hover:-translate-y-1 duration-500 hover:shadow-[0_0_10px_#ffffff80]'>
              <FaCode className='w-10 h-10 mt-3 text-white' />
              <h3 className='my-4 text-white'>Languages</h3>
              <p className='text-white text-sm'>HTML,CSS,JavaScript,NextJs</p>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer  hover:bg-[#1a003c]/50 hover:-translate-y-1 duration-500 hover:shadow-[0_0_10px_#ffffff80]'>
              <RiGraduationCapLine className='w-10 h-10 mt-3 text-white' />
              <h3 className='my-4 text-white'>Education</h3>
              <p className='text-white text-sm'>B.Tech computer Science</p>
            </motion.li>
            <motion.li whileInView={{ scale: 1.05 }} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer  hover:bg-[#1a003c]/50 hover:-translate-y-1 duration-500 hover:shadow-[0_0_10px_#ffffff80]'>
              <IoBagHandleOutline className='w-10 h-10 mt-3 text-white' />
              <h3 className='my-4 text-white'>Projects</h3>
              <p className='text-white text-sm'>Built more than 5 real projects</p>
            </motion.li>
          </motion.ul>
          <motion.h4 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 1.3, duration: 0.5 }} className='my-6 text-white'>Tools I use</motion.h4>
          <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.6 }} className='flex items-center gap-3 sm:gap-5'>
            <motion.li whileHover={{ scale: 1.1 }} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <VscVscode className='w-10 h-10 sm:w-7 text-white' />
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <FaChrome className='w-10 h-10 sm:w-7 text-white' />
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <IoLogoFigma className='w-10 h-10 sm:w-7 text-white' />
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <RiNextjsFill className='w-10 h-10 sm:w-7 text-white' />
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <RiTailwindCssFill className='w-10 h-10 sm:w-7 text-white' />
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
