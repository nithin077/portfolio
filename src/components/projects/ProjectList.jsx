import React,{ useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/varaints";

const ProjectList = ({ name, year, align, image, link, id }) => {
  const isDisabled = id === 2;

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      }
     justify-end`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2
          className={`text-xl font-specail sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <a
          href={link}
          target="_blank"
          aria-disabled={isDisabled}
          onClick={isDisabled ? (e) => e.preventDefault() : undefined}
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }  ${isDisabled ? 'pointer-events-none text-grey cursor-not-allowed' : ''}` }
        >
          View <FaArrowUpRightFromSquare />
        </a>
      </div>
      <div className="max-h-56 max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div></div>
        <img src={image} alt="project Image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default ProjectList;
