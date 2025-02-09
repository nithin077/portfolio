import React from 'react'
import SocialMedia from './SocialMedia'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const FooterMain = () => {
    return (
        <div className='px-4'>
            <div className='w-full h-0.5 bg-lightGrey mt-24'></div>
            <div className='flex md:flex-row sm:flex-col max-w-[1200px] mx-auto mt-10 mb-12 justify-between items-center'>
                <div className='flex flex-grow justify-center'>
                    <p className='text-center text-lg text-lightGrey mb-4 md:mb-0'>Made with ❤️ by Nithin Chilumula</p>
                </div>
                <div className='flex gap-4'>
                    <SocialMedia link="https://github.com/nithin077"  Icon={FaGithub} target="_blank"/>
                    <SocialMedia link="https://www.linkedin.com/in/nithin-chary-chilumula-6a5013168/" Icon={FaLinkedin} target="_blank"/>
                    <SocialMedia link="https://www.instagram.com/_call_me_chinn" Icon={FaInstagram} />
                </div>
            </div>
        </div>
    )
}

export default FooterMain