import React from 'react'
import NavbarLogo from './NavbarLogo'
import { LuArrowDownRight } from 'react-icons/lu'

const headerLinks= [
    {link : "About Me", Section : "about"},
    {link : "Skills", Section : "skills"},
    {link : "Experience", Section : "experience"},
    {link : "Projects", Section : "projects"},
    {link : "Contact", Section : "contact"}
]

const NavbarMain = () => {
  return (
    <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-1/2 -translate-x-1/2 z-20 flex gap-4 mt-2'>
        <div className='flex justify-between w-full max-w-[1200px] max-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange'>
            <NavbarLogo />
            <div>
                <ul className='flex gap-6 text-white font-bold text-center py-4'>
                    {headerLinks.map((link,index) => {
                        return (
                            <li key={index} className='group'>
                            <a href='#' className='cursor-pointer text-white hover:text-cyan transition-all duration-500'>{link.link}</a>
                            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                        </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <button className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex gap-1 items-center bg-gradient-to-r from-cyan hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>Hire Me
                    <LuArrowDownRight />
                </button>
            </div>
        </div>
    </nav>
  )
}

export default NavbarMain