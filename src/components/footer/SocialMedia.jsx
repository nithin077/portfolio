import React from 'react'

const SocialMedia = ({Icon,link}) => {
  return (
    <div className='text-2xl h-12 w-12 border border-grey text-white bg-gradient-to-r from-cyan hover:border-grey hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow rounded-full p-3 flex items-center justify-center'>
        <a href={link} target='_blank' className='cursor-pointer'><Icon /></a>
    </div>
  )
}

export default SocialMedia