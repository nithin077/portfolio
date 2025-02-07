import React from 'react'
import ExperienceDescription from './ExperienceDescription'
import ExperienceTop from './ExperienceTop'
import AllExperience from './AllExperience'
import { motion } from "motion/react"
import { fadeIn } from '../../framerMotion/varaints'


const ExperienceMain = () => {
  return (
    <div id="experience" className='max-w-[1200px] mx-auto px-4'>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceDescription />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceTop />
      </motion.div>
      <div className='w-full h-1 bg-lightBrown sm:hidden lg:block'></div>
      <AllExperience />
    </div>
  )
}

export default ExperienceMain