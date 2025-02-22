import React from "react";
import {motion} from "framer-motion";
const Marquee = () => {
  return (
    <div className="w-full py-18 bg-[#004d43] rounded-t-3xl">
      <div className="border-t-2 border-b-2  border-zinc-300 flex items-center gap-10 whitespace-nowrap overflow-hidden">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}}  transition={{ease:"linear",repeat:Infinity,duration:1}}className="text-[17vw] leading-none founders-grotesk tracking-tighter uppercase pt-1 -mb-2"> </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:1}} className="text-[17vw] leading-none founders-grotesk tracking-tighter uppercase pt-1 -mb-2">WELCOME TO THE KATARIA SOFTWARE SOLUTIONS</motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
