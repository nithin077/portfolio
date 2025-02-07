import React from 'react'
import { motion } from "motion/react"
import { fadeIn } from '../../framerMotion/varaints'

const SingleExperince = ({ experience }) => {
    return (
        <motion.div 
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className='md:h-[350px] md:w-60 sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4 overflow-auto custom-scrollbar no-scrollbar'>
            <p className='font-bold text-cyan'>{experience?.job}</p>
            <p className='text-orange'>{experience?.company}</p>
            <p className='text-lightGrey'>{experience?.date}</p>
            <ul className='text-white list-disc mt-4 pl-4'>{experience?.responsibilities.map((response, index) => {
                return <li key={index}>{response}</li>
            })}</ul>
        </motion.div>
    )
}

export default SingleExperince