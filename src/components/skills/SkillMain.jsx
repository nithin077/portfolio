import React from 'react'
import SkillDescription from './SkillDescription'
import SkillNames from './SkillNames'
import SkillNameSMScreens from './SkillNameSMScreens'

const SkillMain = () => {
    return (
        <div id="skills">
            <div className='max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden'>
                <SkillDescription />
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