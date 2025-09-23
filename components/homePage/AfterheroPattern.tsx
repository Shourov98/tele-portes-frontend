// components/Hero.tsx
'use client'
import React from "react";
import { motion } from "framer-motion";
import Pattern from "../Pattern";
import Logo from "../logo";


const AfterHeroPattern: React.FC = () => {
  return (
    <div className="w-full  bg-[#FFCF00]">
    

  <motion.div
      className=""
     initial={{ x: -200, opacity: 0 }}  // start 200px left and invisible
      animate={{ x: 0, opacity: 1 }}     // slide to original position
      transition={{ duration: 0.6}}        // animation duration
    >
      <Pattern opacities="1" className="rotate-180" />
    </motion.div>
<div className="py-10 lg:py-20  text-center  bg-[#FFCF00] "> <motion.div
      className="flex justify-center items-center"
      initial={{ y: -100, opacity: 0 }}  // starts above the screen
      animate={{ y: 0, opacity: 1 }}     // slides down to its position
      transition={{ duration: 0.8,delay:0.2 }} 
       // optional delay
    >
      <Logo />
    </motion.div>
    </div>
<motion.div
      className="w-full"
      initial={{ x: -200, opacity: 0 }}  // start 200px left and invisible
      animate={{ x: 0, opacity: 1 }}     // slide to original position
      transition={{ duration: 0.8,delay:0.5}}  // optional delay
    >
      <Pattern opacities="1" />
    </motion.div></div>
  );
};

export default AfterHeroPattern;
