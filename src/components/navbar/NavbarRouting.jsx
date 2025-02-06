import React from 'react'
import { Link } from 'react-scroll'



const headerLinks = [
    { link: "Home", Section: "body" },
    { link: "About Me", Section: "about" },
    { link: "Experience", Section: "experience" },
    { link: "Skills", Section: "skills" },
    { link: "Projects", Section: "projects" },
    { link: "Contact", Section: "contact" }
]

const NavbarRouting = () => {
    return (
        <div>
            <ul className='flex gap-6 text-white font-bold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-1/2 -translate-x-1/2 lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4'>
                {headerLinks.map((link, index) => {
                    return (
                        <li key={index} className='group'>
                            <Link to={link.Section}
                                smooth={true}
                                duration={500}
                                offset={-130} className='cursor-pointer text-white hover:text-cyan transition-all duration-500'>{link.link}</Link>
                            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default NavbarRouting