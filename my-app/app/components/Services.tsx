import React from 'react'
import { SlGlobe } from "react-icons/sl";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsAndroid2 } from "react-icons/bs";
import { CgDesignmodo } from "react-icons/cg";
import { TfiGallery } from "react-icons/tfi";
const Services = () => {
    return (
        <div id='services' className=' w-full px-[12%] py-10 scroll-mt-20 '>
            <h4 className=' text-center text-lg mb-2 '>What I offer</h4>
            <h2 className='text-center text-5xl font-bold '> My Services</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 '>I am a web Developer from Afghanistan,I have 4 years experince i  this field </p>
            <div className='grid  grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'>
                <div className='border border-gray-400 rounded-lg px-8 py-12 hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                    <SlGlobe className='w-10 h-10' />
                    <h3 className='text-lg my-4 text-gray-700'>Web design</h3>
                    <p className='text-sm text-gray-600 leading-5'>Web development is the process of building,programing...</p>
                    <a href="#" className='felx items-center gap-2 text-sm mt-5'> Read more <IoIosArrowRoundForward className='w-4' /></a>
                </div>
                <div className='border border-gray-400 rounded-lg px-8 py-12 hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                    <BsAndroid2 className='w-10 h-10' />
                    <h3 className='text-lg my-4 text-gray-700'>Mobile app</h3>
                    <p className='text-sm text-gray-600 leading-5'>Mobile app development involves creating software for mobile devices...</p>
                    <a href="#" className='felx items-center gap-2 text-sm mt-5'> Read more <IoIosArrowRoundForward className='w-4' /></a>
                </div>
                <div className='border border-gray-400 rounded-lg px-8 py-12 hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                    <CgDesignmodo className='w-10 h-10' />
                    <h3 className='text-lg my-4 text-gray-700'>UI/UX design</h3>
                    <p className='text-sm text-gray-600 leading-5'>UI/UX design focuses on creating a seamless user experince...</p>
                    <a href="#" className='felx items-center gap-2 text-sm mt-5'> Read more <IoIosArrowRoundForward className='w-4' /></a>
                </div>
                <div className='border border-gray-400 rounded-lg px-8 py-12 hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                    <TfiGallery className='w-10 h-10' />
                    <h3 className='text-lg my-4 text-gray-700'>Graphic design</h3>
                    <p className='text-sm text-gray-600 leading-5'>Creative design solutions to enhance visual communication...</p>
                    <a href="#" className='felx items-center gap-2 text-sm mt-5'> Read more <IoIosArrowRoundForward className='w-4' /></a>
                </div>


            </div>
        </div>
    )
}

export default Services
