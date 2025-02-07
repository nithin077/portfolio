import React from 'react'

const Description = () => {
    return (
        <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
            <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
            <p className='text-white text-lg' >
                Hi there!, I'm Nithin Chilumula, a Software Developer specializing in  Angular, React.
                My passion lies in developing efficient web applications and ensuring seamless deployment.
                I am committed to creating dynamic, scalable, and user-centric web applications 
                using modern technologies.
                Looking forward to sharpening my skills in a challenging environment. 
                I guarantee enthusiasm in work and fulfilling my projects with inexpressible effort.
            </p>
            <button aria-label="Projects" className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>
                My Projects
            </button>
        </div>
    )
}

export default Description