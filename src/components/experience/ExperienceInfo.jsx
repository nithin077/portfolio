import React from 'react'

const ExperienceInfo = ({YearsOfExperienceInNumber, YearsOfExperienceInText}) => {
  return (
    <div className='flex flex-row justify-center items-center'>
        <p className='font-bold text-6xl text-cyan'>{YearsOfExperienceInNumber}</p>
        <p className='font-bold text-6xl text-lightBrown'>-</p>
        <p className='font-bold text-6xl text-cyan uppercase'>{YearsOfExperienceInText}</p>
    </div>
  )
}

export default ExperienceInfo