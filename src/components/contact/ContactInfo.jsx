import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import SingleInfo from './SingleInfo';


const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white mt-4'>
        <SingleInfo text="nithinchinn@gmail.com" Image={MdOutlineEmail} />
        <SingleInfo text="+91 9912924581" Image={FiPhone} />
        <SingleInfo text="Hyderabad, India" Image={MdOutlineLocationOn} />
    </div>
  )
}

export default ContactInfo