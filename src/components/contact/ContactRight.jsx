import React from 'react'
import ContactInfo from './ContactInfo'

const ContactRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
        <div className=''>
            <img src="assets/images/email-image.png" alt="contact-image" className='max-w-[300px]'/>
            <ContactInfo />
        </div>
    </div>
  )
}

export default ContactRight