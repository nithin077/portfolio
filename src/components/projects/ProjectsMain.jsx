import React from 'react'
import ProjectsDescription from './ProjectsDescription'
import ProjectList from './projectList'

const projects = [
    {
        name: "Project1",
        year: "2024",
        align: "right",
        image: "src/assets/images/website-img-1.jpg",
        link: "#"
    },
    {
        name: "Project2",
        year: "2024",
        align: "left",
        image: "src/assets/images/website-img-2.webp",
        link: "#"
    },
    {
        name: "Project3",
        year: "2025",
        align: "right",
        image: "src/assets/images/website-img-3.jpg",
        link: "#"
    },

]

const ProjectsMain = () => {
    return (
        <div id="projects" className='max-w-[1200px] mx-auto px-4'>
            <ProjectsDescription />
            <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
                {projects.map((item,index) => {
                    return <ProjectList key={index} name={item.name} year={item.year} align = {item.align} image = {item.image} link = {item.link}/>
                })}
            </div>
        </div>
    )
}

export default ProjectsMain