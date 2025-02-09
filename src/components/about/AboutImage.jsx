import React from 'react'

const AboutImage = () => {
  return (
    <div className='h-[500px] w-80 relative'>
       <div className='h-[500px] w-80 rounded-[90px] absolute overflow-hidden'>
        <img src="assets/images/about-me.jpg" alt="aboutImage" className='h-full w-auto object-cover' />
       </div>
       <div className='h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10'></div>
    </div>
  )
}

export default AboutImage