import React from 'react'
import Description from "./Description"
import Constant from '../../sharedcomponents/Constant'

const Body = () => {
  return (
    <div className='pt-40 pb-16'>
        <div className='flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4'>
        <Description />
        <Constant />
        </div>
    </div>
  )
}

export default Body