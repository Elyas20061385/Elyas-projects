import React from 'react'
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <p className='w-10 h-10 mx-auto mb-2 font-bold text-3xl text-white'>ELYAS&trade;</p>
                <div className='w-max flex items-center gap-2 mx-auto text-white'>
                    <MdEmail className='w-7 h-7 text-white' />
                    elyasalowdin@gmail.com
                </div>
            </div>

        </div>
    )
}

export default Footer