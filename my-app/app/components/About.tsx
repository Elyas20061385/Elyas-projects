import Image from 'next/image'
import { FaCode } from "react-icons/fa6";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaChrome } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>Introduction</h4>
      <h2 className='text-center text-5xl'>About me</h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image
            src="/profile2.jpg"
            alt=""
            width={200}
            height={200}
            className="w-full rounded-3xl"
          />
        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl'>I’m a passionate web developer who loves transforming ideas into beautiful, functional, and responsive digital experiences.
            I specialize in frontend development using Next.js, React, and Tailwind CSS, and I’m constantly exploring new tools to make the web faster and more interactive.
            My goal is to build modern, clean, and user-friendly websites that not only look great but also deliver real value to users.
            When I’m not coding, I’m learning new technologies, improving my design sense, and working on side projects to sharpen my skills.</p>
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl'>
              <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                <FaCode className='w-10 h-10 mt-3'/>
                <h3 className='my-4 text-gray-700'>Languages</h3>
                <p className='text-gray-600 text-sm'>HTML,CSS,JavaScript,NextJs</p>
              </li>
              <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer  hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                <RiGraduationCapLine className='w-10 h-10 mt-3' />
                <h3 className='my-4 text-gray-700'>Education</h3>
                <p className='text-gray-600 text-sm'>B.Tech computer Science</p>
              </li>
              <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer  hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                <IoBagHandleOutline className='w-10 h-10 mt-3' />
                <h3 className='my-4 text-gray-700'>Projects</h3>
                <p className='text-gray-600 text-sm'>Built more than 5 real projects</p>
              </li>
            </ul>
            <h4 className='my-6 text-gray-700'>Tools I use</h4>
            <ul className='flex items-center gap-3 sm:gap-5'>
              <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                <VscVscode className='w-10 h-10 sm:w-7'/>
              </li>
              <li  className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                <FaChrome className='w-10 h-10 sm:w-7'/>
              </li>
              <li  className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                <IoLogoFigma className='w-10 h-10 sm:w-7'/>
              </li>
              <li  className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                <RiNextjsFill className='w-10 h-10 sm:w-7'/>
              </li>
              <li  className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                <RiTailwindCssFill className='w-10 h-10 sm:w-7'/>
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
