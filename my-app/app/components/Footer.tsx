import React from 'react'
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <p className='w-10 h-10 mx-auto mb-2 font-bold text-3xl'>ELYAS&trade;</p>
                <div className='w-max flex items-center gap-2 mx-auto'>
                    <MdEmail className='w-7 h-7' />
                    elyasalowdin@gmail.com
                </div>
            </div>

        </div>
    )
}

export default Footer
