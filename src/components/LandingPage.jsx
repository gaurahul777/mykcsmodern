import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
// import data from '../costants.json'
// import { Link, Links, NavLink } from "react-router-dom";
import { RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiTwitterLine } from "react-icons/ri";
const LandingPage = () => {
  
  return (
    <div id='home' data-scroll data-scroll-speed="-.3" className="w-full h-[100vh] bg-zinc-900   pt-1">
      <div className="textstructure mt-32 px-20 flex flex-col gap-y-1">
        <div className="masker">
          <div className="w-fit flex items-center">
            <h1 className="uppercase text-7xl font-light -leading-[1vw] tracking-tight founders-grotesk">Grow Your</h1>
          </div>
        </div>

        <div className="masker">
          <div className="w-fit flex overflow-hidden">
            <motion.div
             initial={{width:0}} 
             animate={{width:"9vw"}} 
             transition={{ease:[0.12, 0, 0.39, 0],duration:1}}
              className="w-[9vw] h-[5vw]  bg-cover bg-center bg-[url('/assets/images/kss3.png')] mr-2 mt-1 rounded-md"></motion.div>
            <h1 className="uppercase text-7xl founders-grotesk -leading-[1vw] tracking-tighter">Business with <span className="text-[#eb8c62]">kss</span></h1>
          </div>
        </div>
        <div className="masker">
          <div className="w-fit flex items-center">
            <h3 className="w-[58%] text-xl founders-grotesk text-gray-300 tracking-tighter -leading-[1vw] mt-3">Development and designing company, delivering top-notch quality services across the India. With years of experience, and team of talented professionals, we are serving a large number of organizations of all sizes, small or large, startup or established</h3>
          </div>
        </div>

        <div className="bg-[#312d2f] h-[13vw] w-[3.5vw] absolute right-0 top-40 py-2 text-center">
         <div className="flex  flex-col items-center justify-between gap-y-4 overflow-hidden">
               {/* <Link to="https://facebook.com" aria-label="Facebook" target="_blank" className="hover:text-gray-400">
             {/* </Link> */}
              {/*<Link to="https://instagram.com" aria-label="Instagram" target="_blank" className="hover:text-gray-400">
              </Link>
              <Link to="https://twitter.com" aria-label="Twitter" target="_blank" className="hover:text-gray-400">
              </Link>
              <Link  aria-label="LinkedIn" target="_blank" className="hover:text-gray-400">
              </Link> */}

                <RiFacebookFill size={24} className="text-[#eb8c62]"/> 
                <RiInstagramLine size={24} className="text-[#eb8c62]"/>
                <RiTwitterLine size={24} className="text-[#eb8c62]"/>
              <RiLinkedinFill size={24} className="text-[#eb8c62]"/>
            </div> 
        </div>
      </div>

      <div className="border-t-[2px] border-zinc-800 mt-20 flex justify-between items-center py-3 px-20">
        {/* {["For public and private compnies","From the first pitch to IPO"].map((item,index)=>{
          <p key={index} className='text-md font-light tracking-tight leading-none text-red-600'>{item}</p>
        })} */}

        <p className="text-md font-light tracking-tight leading-none">Explore our best products that beyond the Ordinary</p>
        <p className="text-md font-light tracking-tight leading-none">Solutions We Provide</p>
        <div className="start flex items-center gap-4">
          <div className="px-5 py-2 border-[1px] font-light border-zinc-400 rounded-full text-md uppercase">start the project</div>
          <div className="w-9 h-8 flex items-center justify-center rounded-full border-zinc-400 border-[1px] ">
            <span className="rotate-[45deg]">
              {" "}
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
