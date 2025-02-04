import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3,IoLogoJavascript,IoLogoAngular,IoLogoReact } from "react-icons/io5";
import { SiTypescript, SiBootstrap, SiTailwindcss, SiJasmine } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const skills = [
    {
       skill : 'JavaScript',
       icon : <IoLogoJavascript />
   },
   {
       skill : 'Angular',
       icon : <IoLogoAngular />
   },
   {
       skill : 'TypeScript',
       icon : <SiTypescript />
   },
   {
       skill : 'React',
       icon : <IoLogoReact />
   },
   {
       skill : 'HTML',
       icon : <TiHtml5 />
   },
   {
       skill : 'CSS',
       icon : <IoLogoCss3 />
   },
   {
       skill : 'Bootstrap',
       icon : <SiBootstrap />
   },
   {
       skill : 'TailwindCss',
       icon : <SiTailwindcss />
   },
   {
       skill : 'Jasmine',
       icon : <SiJasmine />
   },
   {
       skill : 'Git',
       icon : <FaGitAlt />
   },
   
]

const SkillNames = () => {
  return (
    <div className='flex justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {skills.map((item,index) => {
            return (
                <div key={index} className='hover:-translate-y-10 transition-all duration-500'>
                    <div className='flex flex-col items-center gap-2 relative'>
                        <div className='bg-white text-cyan h-24 w-24 flex items-center justify-center rounded-full hover:to-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange'>
                            {item.icon}
                        </div>
                        <p className='text-white font-bold'>
                            {item.skill}
                        </p>
                    </div>
                    <div className='w-24 h-48 bg-orange absolute top-12 -z-10'>

                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default SkillNames