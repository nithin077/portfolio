import React from 'react'
import Description from './Description'
import AboutImage from './AboutImage'
import { motion } from "motion/react"
import { fadeIn } from '../../framerMotion/varaints'

const AboutMain = () => {
  return (
    <div id='about' className='flex md:flex-row sm:flex-col gap-12 max-w-[1200px] mx-auto mt-24 justify-between items-center'>
      <motion.div
       variants={fadeIn("right", 0.2)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.7 }}
      >
        <Description />
      </motion.div>
      <motion.div
       variants={fadeIn("left", 0.2)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.7 }}
      >
        <AboutImage />
      </motion.div>
    </div>
  )
}

export default AboutMain