import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
// import { Power4 } from "gsap/all";
export const Services = () => {
  const cards =[useAnimation(), useAnimation()];
  const handleHover = (index) => {
    console.log(index);
    cards[index].start({ y: "0%" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-18">
        <h1 className="text-5xl neue-montreal tracking-tight">Our Services</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
           onHoverStart={() => handleHover(0)} 
           onHoverEnd={() => handleHoverEnd(0)}
           className="relative cardcontainer rounded-lg w-1/2 h-[75vh] ">
            <h1 className=" overflow-hidden absolute flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl text-[#CDEA68] founders-grotesk leading-none tracking-tighter text-nowrap">
              {"WEB DEVELOPMENT".split("").map((item, index) => (
                <motion.span className="inline-block" initial={{ y: "100%" }} animate={cards[0]} key={index} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}>
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" className="w-full h-full bg-cover" />
            </div>
          </motion.div>
          <motion.div 
          onHoverStart={() => handleHover(1)} 
          onHoverEnd={() => handleHoverEnd(1)}
          className="relative cardcontainer rounded-lg w-1/2 h-[75vh] ">
            <h1 className="overflow-hidden absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl text-[#CDEA68] founders-grotesk leading-none tracking-tighter text-nowrap">
              {"APP DEVELOPMENT".split("").map((item, index) => (
                <motion.span className="inline-block" initial={{ y: "100%" }} animate={cards[1]} key={index} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}>
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" className="w-full h-full bg-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
