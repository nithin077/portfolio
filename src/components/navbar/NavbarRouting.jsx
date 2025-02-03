import React from 'react'



const headerLinks = [
    { link: "About Me", Section: "about" },
    { link: "Skills", Section: "skills" },
    { link: "Experience", Section: "experience" },
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
                            <a href='#' className='cursor-pointer text-white hover:text-cyan transition-all duration-500'>{link.link}</a>
                            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default NavbarRouting