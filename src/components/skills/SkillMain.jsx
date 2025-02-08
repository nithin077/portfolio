import React from 'react'
import SkillDescription from './skillDescription'
import SkillNames from './SkillNames'
import SkillNameSMScreens from './SkillNameSMScreens'
import { motion } from "motion/react"
import { fadeIn } from '../../framerMotion/varaints'


const SkillMain = () => {
    return (
        <div id="skills">
            <div className='max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden'>
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0 }}
                >
                    <SkillDescription />
                </motion.div>
                <div className='bottom-12 absolute left-1/2 -translate-x-1/2 lg:block sm:hidden'>
                    <SkillNames />
                </div>
                <div className='lg:hidden sm:block'>
                    <SkillNameSMScreens />
                </div>
            </div>
        </div>
    )
}

export default SkillMain