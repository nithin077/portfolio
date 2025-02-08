import React from "react";

const SingleSkillName = ({ icon, skillName }) => {
    return (
        <div className="hover:-translate-y-10 transition-all duration-500">
            <div className="flex flex-col items-center gap-2 relative">
                <div className="bg-white text-cyan h-24 w-24 flex items-center justify-center rounded-full hover:to-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">
                    {icon}
                </div>
                <p className="text-white font-bold">{skillName}</p>
            </div>
            <div className='w-24 h-48 bg-orange absolute top-12 -z-10'>
            </div>
        </div>
    );
};

export default SingleSkillName;
