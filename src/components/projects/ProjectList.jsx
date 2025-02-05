import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectList = ({name,year,align,date,image,link}) => {
  return (
    <div className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === 'left' ? 'md:flex-row' :'md:flex-row-reverse'}
     justify-end`}>
        <div>
            <h2 className='md:text-3xl sm:text-2xl text-orange'>{name}</h2>
            <h2 className={`text-xl font-specail sm:text-center ${align === "left" ? "md:text-right" : "md:text-left"}`}>{year}</h2>
            <a href={link} className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align==="left"?"md:justify-self-end" : "md:justify-self-start"}`}>View <FaArrowUpRightFromSquare /></a>
        </div>
        <div className='max-h-56 max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white'>
            <div>
                
            </div>
            <img src={image} alt="project Image" className='w-full h-full' />
        </div>
    </div>
  )
}

export default ProjectList