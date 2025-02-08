import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3,IoLogoJavascript,IoLogoAngular,IoLogoReact } from "react-icons/io5";
import { SiTypescript, SiBootstrap, SiTailwindcss, SiJasmine } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "motion/react"
import { fadeIn } from '../../framerMotion/varaints';

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

const SkillNameSMScreens = () => {
  return (
    <div className='grid md:grid-cols-4'>
        {skills.map((item,index) => {
            return (
                <motion.div 
                variants={fadeIn("up", `0.${index}`)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                key={index} className='flex flex-col items-center'>
                    <div className='text-7xl text-orange '> 
                        {item.icon} 
                    </div>
                    <p className='text-center mt-4 text-white'>{item.skill}</p>
                </motion.div>
            )
        })}
    </div>
  )
}

export default SkillNameSMScreens