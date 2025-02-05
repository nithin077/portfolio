import React from 'react'
import ExperienceDescription from './ExperienceDescription'
import ExperienceTop from './ExperienceTop'
import AllExperience from './AllExperience'

const ExperienceMain = () => {
  return (
    <div id="experience" className='max-w-[1200px] mx-auto px-4'>
        <ExperienceDescription />
        <ExperienceTop />
        <div className='w-full h-1 bg-lightBrown sm:hidden lg:block'></div>
        <AllExperience />
    </div>
  )
}

export default ExperienceMain