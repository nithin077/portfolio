import React from 'react'
import Description from './Description'
import AboutImage from './AboutImage'

const AboutMain = () => {
  return (
    <div id='about' className='flex md:flex-row sm:flex-col gap-12 max-w-[1200px] mx-auto mt-24 justify-between items-center'>
      <div>
        <Description />
      </div>
      <div>
        <AboutImage />
      </div>
    </div>
  )
}

export default AboutMain