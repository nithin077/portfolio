import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='font-bold uppercase text-orange text-3xl font-specail text-center'>Since 2022</p>
        <div className='flex justify-center items-center gap-4'>
            <ExperienceInfo YearsOfExperienceInNumber="3" YearsOfExperienceInText="Years"/>
        </div>
        <p className='text-center text-white'>With 3 years of expereince building dynamic and user-friendly web applications</p>
    </div>
  )
}

export default ExperienceTopLeft