import React from 'react'
import { RiRectangleLine } from "react-icons/ri";
import { motion } from "motion/react"
import { fadeIn } from '../framerMotion/varaints';

const Constant = () => {
  return (
    <motion.div
    variants={fadeIn("left", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0 }}
     className='h-full flex items-center justify-center'>
      <img src='src/assets/images/Nithin.jpg' alt="Nithin" className='max-h-[450px] w-auto rounded-2xl'/>
      <div className='absolute -z-10 justify-center items-center animate-pulse'>
        <RiRectangleLine className='md:h-full sm:h-[120%] min-h-[500px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]'/>
      </div>
    </motion.div>
  )
}

export default Constant