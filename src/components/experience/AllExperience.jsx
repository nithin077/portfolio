import React from 'react'
import SingleExperince from './SingleExperince'
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react"
import { fadeIn } from '../../framerMotion/varaints'

const experiences = [
    {
        job: "Software Engineer",
        company: "LTIMindtree",
        date: "Sep 2022 - Present",
        responsibilities: [
            "Led the development of DigiBoard, enabling interactive board creation and Andon dashboards for real-time data visualization and collaboration.",
            "Streamlined plant activities with an efficient task assignment, progress tracking, and hierarchical approval system.",
            "Developed a robust task management system and comprehensive user management module with role-based access control.",
            "Improved application performance by 20%, enhancing user experience and boosting productivity by 15%."
        ]
    },
    {
        job: "Freelance Testing",
        company: "UTest",
        date: "Apr 2024 - Present",
        responsibilities: [
            "Tested a large-scale e-commerce platform for functionality, performance, and security.",
            "Created detailed test cases, executed manual tests, and reported critical bugs",
            "Performed end-to-end testing on both Android and iOS platforms",
        ]
    },
    {
        job: "Software Intern",
        company: "Mindtree",
        date: "Feb 2022 - May 2022",
        responsibilities: [
            "Worked on FoodDelivery webApplication",
            "Implemented a user friendly User Interface using Angular and API's using DotNet, ensuring an Intuitive user experience",
            "Working on the performance optimization of web applications.",
            "Ensured System’s reliability by creating comprehensive test cases using Jasmine testing framework and XUnit framework."
        ]
    }
]

const AllExperience = () => {
    return (
        <div className='flex md:flex-row sm:flex-col items-center justify-between'>
            {experiences.map((experience, index) => {
                return (
                    <>
                        <SingleExperince experience={experience} />
                        {index < 2 ? (
                            <motion.div
                                variants={fadeIn("right", 0.2)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0 }}
                            >
                                <FaArrowRight className='text-6xl text-orange lg:block sm:hidden' />
                            </motion.div>) : ""}
                    </>
                )
            })}
        </div>
    )
}

export default AllExperience