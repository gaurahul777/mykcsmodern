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
    <div id='services' data-scroll data-scroll-section data-scroll-speed=".2" className="w-full py-5 md:py-20 ">
      <div className="w-full px-2 md:px-20 border-b-[1px] border-zinc-700 md:pb-18 pb-6">
        <h1 className="text-3xl md:text-5xl neue-montreal tracking-tight">Our Services</h1>
      </div>
      <div className="px-2 md:px-20">
        <div className="cards w-full flex flex-col md:flex-row gap-10  md:mt-10">
          <motion.div
           onHoverStart={() => handleHover(0)} 
           onHoverEnd={() => handleHoverEnd(0)}
           className=" relative cardcontainer rounded-lg md:w-1/2 md:h-[75vh] ">
            <h1 className=" overflow-hidden absolute flex md:left-full md:-translate-x-1/2 md:top-1/2 -translate-y-1/2 z-[9] text-6xl text-[#CDEA68] founders-grotesk leading-none tracking-tighter text-nowrap">
              {"WEB DEVELOPMENT".split("").map((item, index) => (
                <motion.span className="inline-block" initial={{ y: "100%" }} animate={cards[0]} key={index} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}>
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img src="/public/assets/images/web.jpg" className="w-full h-full bg-cover" />
            </div>
          </motion.div>
          <motion.div 
          onHoverStart={() => handleHover(1)} 
          onHoverEnd={() => handleHoverEnd(1)}
          className="relative cardcontainer rounded-lg md:w-1/2 md:h-[75vh] ">
            <h1 className="overflow-hidden absolute md:right-full md:translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-[9] text-6xl text-[#CDEA68] founders-grotesk leading-none tracking-tighter text-nowrap">
              {"APP DEVELOPMENT".split("").map((item, index) => (
                <motion.span className="inline-block" initial={{ y: "100%" }} animate={cards[1]} key={index} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}>
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img src="/public/assets/images/app.jpg" className="w-full h-full bg-cover" />
            </div>
          </motion.div>
        </div>
        <div className="cards w-full flex flex-col md:flex-row gap-10 mt-10">
          <motion.div
           onHoverStart={() => handleHover(0)} 
           onHoverEnd={() => handleHoverEnd(0)}
           className="relative cardcontainer rounded-lg md:w-1/2 md:h-[75vh] ">
            <h1 className=" overflow-hidden absolute flex md:left-full md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-[9] text-6xl text-[#CDEA68] founders-grotesk leading-none tracking-tighter text-nowrap">
              {"CRM".split("").map((item, index) => (
                <motion.span className="inline-block" initial={{ y: "100%" }} animate={cards[0]} key={index} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}>
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img src="/public/assets/images/crm.jpg" className="w-full h-full bg-cover" />
            </div>
          </motion.div>
          <motion.div 
          onHoverStart={() => handleHover(1)} 
          onHoverEnd={() => handleHoverEnd(1)}
          className="relative cardcontainer rounded-lg md:w-1/2 md:h-[75vh] ">
            <h1 className="overflow-hidden absolute md:right-full md:translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-[9] text-6xl text-[#CDEA68] founders-grotesk leading-none tracking-tighter text-nowrap">
              {"ERP".split("").map((item, index) => (
                <motion.span className="inline-block" initial={{ y: "100%" }} animate={cards[1]} key={index} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}>
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img src="/public/assets/images/erp.jpg" className="w-full h-full bg-cover" />
            </div>
          </motion.div>
        </div>
        <div className="cards w-full flex flex-col md:flex-row gap-10 mt-10">
          <motion.div
           onHoverStart={() => handleHover(0)} 
           onHoverEnd={() => handleHoverEnd(0)}
           className="relative cardcontainer rounded-lg md:w-1/2 md:h-[75vh] ">
            <h1 className=" overflow-hidden absolute flex md:left-full md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-[9] text-6xl text-[#CDEA68] founders-grotesk leading-none tracking-tighter text-nowrap">
              {"24/7 SUPPORT".split("").map((item, index) => (
                <motion.span className="inline-block" initial={{ y: "100%" }} animate={cards[0]} key={index} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}>
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img src="/public/assets/images/support.jpg" className="w-full h-full bg-cover" />
            </div>
          </motion.div>
          <motion.div 
          onHoverStart={() => handleHover(1)} 
          onHoverEnd={() => handleHoverEnd(1)}
          className="relative cardcontainer rounded-lg md:w-1/2 md:h-[75vh] ">
            <h1 className="overflow-hidden absolute md:right-full md:translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-[9] text-6xl text-[#CDEA68] founders-grotesk leading-none tracking-tighter text-nowrap">
              {"UPCOMING".split("").map((item, index) => (
                <motion.span className="inline-block" initial={{ y: "100%" }} animate={cards[1]} key={index} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}>
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img src="/public/assets/images/upcoming.jpg" className="w-full h-full bg-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
