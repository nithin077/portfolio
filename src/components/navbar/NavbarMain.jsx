import React from 'react'
import NavbarLogo from './NavbarLogo'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import NavbarRouting from './NavbarRouting';
import { LuArrowDownRight } from 'react-icons/lu'


const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-1/2 -translate-x-1/2 z-20 flex gap-4 mt-2'>
      <div className='flex justify-between w-full max-w-[1200px] max-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange'>
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarRouting />
        </div>
        <div>
          <button className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex gap-1 items-center bg-gradient-to-r from-cyan hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>Hire Me
            <div className='sm:hidden md:block'>
              <LuArrowDownRight />
            </div>
          </button>
        </div>
      </div>
      <div className='flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-orange border-[0.5px]'>
        <button className='text-2xl p-3 border border-orange rounded-full text-white' onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  )
}

export default NavbarMain