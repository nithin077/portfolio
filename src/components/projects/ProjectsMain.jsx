import React from 'react'
import ProjectsDescription from './ProjectsDescription'
import ProjectList from './ProjectList'
import { motion } from "motion/react"
import { fadeIn } from '../../framerMotion/varaints'

const projects = [
    {
        id : 1,
        name: "Food Court From Namaste React",
        year: "2024",
        align: "right",
        image: "assets/images/website-img-1.jpg",
        link: "https://food-court-neon.vercel.app/"
    },
    {
        id : 2,
        name: "DigiBoard",
        year: "2024",
        align: "left",
        image: "assets/images/website-img-2.webp",
        link: "/"
    },
    {
        id : 3,
        name: "Razor Payment Test Integration",
        year: "2025",
        align: "right",
        image: "assets/images/website-img-3.jpg",
        link: "https://nithin077.github.io/sos-children/"
    },

]

const ProjectsMain = () => {
    return (
        <div id="projects" className='max-w-[1200px] mx-auto px-4'>
            <motion.div
             variants={fadeIn("right", 0.2)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: false, amount: 0 }}
            >
                <ProjectsDescription />
            </motion.div>
            <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
                {projects.map((item,index) => {
                    return <ProjectList key={index} id={item.id} name={item.name} year={item.year} align = {item.align} image = {item.image} link = {item.link}/>
                })}
            </div>
        </div>
    )
}

export default ProjectsMain