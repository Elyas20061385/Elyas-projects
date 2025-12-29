import React, {useState} from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "motion/react"
const Contact = () => {
   const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ee6ec019-2770-4b4d-934d-68fe0a20b607");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} id='contact' className='w-full px-[12%] py-10 scroll-mt-20 '>
       <motion.h4 initial={{y: -20, opacity: 0 }} whileInView={{y: 0, opacity: 1 }} transition={{delay: 0.3, duration: 0.5 }} className=' text-center text-lg mb-2 text-white'>Connect with me</motion.h4>
            <motion.h2 initial={{y: -20, opacity: 0 }} whileInView={{y: 0, opacity: 1 }} transition={{delay: 0.5, duration: 0.5 }} className='text-center text-5xl font-bold text-white'> Get in touch</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay: 0.7, duration: 0.5 }} className='text-center max-w-2xl mx-auto mt-5 mb-12 text-white'>I love to hear from you! If you have any questions, comments, or feedback, please use the form below.</motion.p>
            <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay: 0.9, duration: 0.5 }} onSubmit={onSubmit} className='max-w-2xl mx-auto'>
              <div className='grid grid-cols-[auto] gap-6 mt-10 mb-8'>
                <motion.input initial={{x: -50, opacity: 0 }} whileInView={{x: 0, opacity: 1 }} transition={{delay: 1.1, duration: 0.6 }} type="text" placeholder='Enter your name'required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name'/>
                <motion.input initial={{x: 50, opacity: 0 }} whileInView={{x: 0, opacity: 1 }} transition={{delay: 1.2, duration: 0.6 }} type="email" placeholder='Enter your email'required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email'/>
              </div>
              <motion.textarea initial={{y: 100, opacity: 0 }} whileInView={{y: 0, opacity: 1 }} transition={{delay: 1.3, duration: 0.6 }} rows={6} placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'></motion.textarea>
              <motion.button whileHover={{scale: 1.05}} transition={{duration: 0.3}} type='submit' className='py-4 px-8 w-max flex items-center justify-between gap-2 text-white rounded-full mx-auto  bg-[#1a003c]/50 duration-500 hover:shadow-[0_0_10px_#ffffff80]'>Submit now <IoIosArrowRoundForward className='w-4 text-white'/></motion.button>
              <p className='mt-4'>{result}</p>
            </motion.form>
    </motion.div>
  )
}

export default Contact