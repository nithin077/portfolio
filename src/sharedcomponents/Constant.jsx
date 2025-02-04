import React from 'react'
import { RiRectangleLine } from "react-icons/ri";

const Constant = () => {
  return (
    <div className='h-full flex items-center justify-center'>
      <img src='src/assets/images/Nithin.jpg' alt="Nithin" className='max-h-[450px] w-auto rounded-2xl'/>
      <div className='absolute -z-10 justify-center items-center animate-pulse'>
        <RiRectangleLine className='md:h-full sm:h-[120%] min-h-[500px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]'/>
      </div>
    </div>
  )
}

export default Constant