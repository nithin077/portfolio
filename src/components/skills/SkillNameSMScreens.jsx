import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3,IoLogoJavascript,IoLogoAngular,IoLogoReact } from "react-icons/io5";
import { SiTypescript, SiBootstrap, SiTailwindcss, SiJasmine } from "react-icons/si";

const skills = [
    {
        skill : 'HTML',
        icon : <TiHtml5 />
    },
    {
        skill : 'CSS',
        icon : <IoLogoCss3 />
    }, {
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
    
]

const SkillNameSMScreens = () => {
  return (
    <div className='grid md:grid-cols-4'>
        {skills.map((item,index) => {
            return (
                <div key={index} className='flex flex-col items-center'>
                    <div className='text-7xl text-orange '> 
                        {item.icon} 
                    </div>
                    <p className='text-center mt-4 text-white'>{item.skill}</p>
                </div>
            )
        })}
    </div>
  )
}

export default SkillNameSMScreens