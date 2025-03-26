import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
// import data from '../costants.json'
// import { Link, Links, NavLink } from "react-router-dom";
import { RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiTwitterLine } from "react-icons/ri";
import { useNavigate } from "react-router";
const LandingPage = () => {
    const navigate = useNavigate();
  
  const scrollToSection = (id) => {
    if(id=='contact'){
      navigate('/contact');
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div id='home' data-scroll data-scroll-speed="-.3" className=" w-full md:h-[100vh] h-[75vh] bg-zinc-900 pt-1">
      <div className="textstructure mt-32 px-2 md:px-20 flex flex-col gap-y-1">
        <div className="masker  mb-3 md:mb-0">
          <div className="w-fit flex items-center">
            <h1 className="uppercase text-4xl md:text-7xl font-light -leading-[1vw] tracking-tight founders-grotesk">Grow Your</h1>
          </div>
        </div>

        <div className="masker">
          <div className="w-fit flex overflow-hidden">
            <motion.div
             initial={{width:0}} 
             animate={{width:"9vw"}} 
             transition={{ease:[0.12, 0, 0.39, 0],duration:1}}
              className="hidden md:block w-[9vw] h-[5vw]  bg-cover bg-center bg-[url('/assets/images/kss3.png')] mr-2 mt-1 rounded-md"></motion.div>
            <div
              className="md:hidden block w-[18vw] h-[10vw]  bg-cover bg-center bg-[url('/assets/images/kss3.png')] mr-2 mt-1 rounded-md"></div>
            <h1 className="uppercase text-4xl md:text-7xl founders-grotesk -leading-[1vw] tracking-tighter">Business with <span className="text-[#eb8c62]">kss</span></h1>
          </div>
        </div>
        <div className="masker">
          <div className="w-fit flex items-center">
            <h3 className=" w-full md:w-[58%] text-xl founders-grotesk text-gray-300 md:tracking-tighter -leading-[1vw] mt-3">Development and designing company, delivering top-notch quality services across the India. With years of experience, and team of talented professionals, we are serving a large number of organizations of all sizes, small or large, startup or established</h3>
          </div>
        </div>

        <div className="hidden md:block bg-[#312d2f] h-[13vw] w-[3.5vw] absolute right-0 top-40 py-2 text-center">
         <div className="flex flex-col items-center justify-between gap-y-4 overflow-hidden">

                <RiFacebookFill size={24} className="text-[#eb8c62]"/> 
                <RiInstagramLine size={24} className="text-[#eb8c62]"/>
                <RiTwitterLine size={24} className="text-[#eb8c62]"/>
              <RiLinkedinFill size={24} className="text-[#eb8c62]"/>
            </div> 
        </div>
      </div>

      <div className="border-t-[2px] border-zinc-800 mt-20 flex justify-between items-center md:py-3 py-8 px-2 md:px-20">
        {/* {["For public and private compnies","From the first pitch to IPO"].map((item,index)=>{
          <p key={index} className='text-md font-light tracking-tight leading-none text-red-600'>{item}</p>
        })} */}

        <p onClick={() => scrollToSection('our-product')} className="hover:text-zinc-400 text-sm md:text-md font-light tracking-tight leading-none cursor-pointer">Explore our best products that beyond the Ordinary</p>
        <p onClick={() => scrollToSection('services')}  className="text-sm md:text-md font-light tracking-tight leading-none hover:text-zinc-400 cursor-pointer">Solutions We Provide</p>
        <div onClick={() => scrollToSection('contact')}  className=" start flex items-center md:gap-4 gap-1 group">
          <div  className="px-3 py-1 md:px-5 md:py-2 border-[1px] font-light border-zinc-400 rounded-full text-xs md:text-md uppercase group-hover:bg-zinc-50 group-hover:text-black cursor-pointer">start the project</div>
          <div className="hidden group-hover:bg-white group-hover:text-black md:w-9 md:h-8 md:flex items-center justify-center rounded-full border-zinc-400 border-[1px] ">
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
