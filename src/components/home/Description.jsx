import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/varaints";

const handleResumeClick = () => {
  window.open('assets/images/software-Engineer-Resume.pdf', '_blank');
}

const Description = () => {
  return (
    <div className="flex flex-col h-full gap-4 justify-center md:text-left sm:text-center sm:items-center md:items-start">
      <motion.p
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-cyan text-lg"
      >
        Hi I'am
      </motion.p>
      <motion.h1
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-8xl sm:text-3xl font-bold font-specail text-snow"
      >
        Chilumula Nithin
      </motion.h1>
      <motion.h2
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-6xl sm:text-5xl text-silver"
      >
        Software Developer, <br />
        Building the web, better.
      </motion.h2>
      <motion.p
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-xl mt-4 text-silver"
      >
        {" "}
        Innovating the web with purpose and precision. As a full-stack engineer,{" "}
        <br />I create accessible, user-friendly digital experiences that leave
        a lasting impact.
      </motion.p>
      <motion.button
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        onClick={handleResumeClick}
        className="bg-cyan text-snow px-4 py-2 mt-4 sm:mb-6 rounded-md  w-40"
      >
        View Resume
      </motion.button>
    </div>
  );
};

export default Description;
