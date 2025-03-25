import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiTwitterLine } from "react-icons/ri";
import {  useNavigate } from "react-router";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    if(id=='contact'){
      navigate('/contact');
    }
    setOpenMenu(false)
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="">
      <div
        className={` fixed z-[9] h-auto w-full px-2 md:px-20 pt-2 md:pt-2 flex justify-between items-center neue-montreal md:bg-white/1 md:backdrop-blur-md md:shadow-lg 
       overflow-hidden ${openMenu ? "h-[5vh] items-start bg-black" : "bg-white/1 backdrop-blur shadow-lg"}`}
      >
        <div className="logo text-[7vw] md:text-[3vw] tracking-tighter founders-grotesk w-auto">
          kss<span className="text-[#d99175]">pl</span>
        </div>

        <div className="hidden md:block ">
          <div className="links flex gap-10">
            {[
              { name: "Home", id: "home" },
              { name: "About Us", id: "about" },
              { name: "Services", id: "services" },
              { name: "Our Product", id: "our-product" },
              { name: "Contact us", id: "contact" },
            ].map((item, index) => (
              <button key={index} onClick={() => scrollToSection(item.id)} className={`cursor-pointer text-nowrap text-lg capitalize font-light hover:text-[#d99175] transition ${index === 4 && "ml-32"}`}>
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className="block md:hidden" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <IoCloseSharp className="text-4xl" /> : <IoMenu className="text-4xl" />}
        </div>
      </div>

      {openMenu && <div className={`transition-all ease-in-out duration-5000 md:hidden w-full h-[80vh] fixed ${openMenu?'top-[5%]':'top-[5%] -left-[150%]'}  bg-black  z-[999]`}>
        <div className="links flex  pl-[10px] flex-col gap-6">
            {[
              { name: "Home", id: "home" },
              { name: "About Us", id: "about" },
              { name: "Services", id: "services" },
              { name: "Our Product", id: "our-product" },
              { name: "Contact us", id: "contact" },
            ].map((item, index) => (
              <button key={index} onClick={() => scrollToSection(item.id)} className={`cursor-pointer text-nowrap text-2xl capitalize font-semibold hover:text-[#d99175] transition pt-4 `}>
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex mt-15 items-center justify-center gap-x-8 overflow-hidden">
            <RiFacebookFill size={24} className="text-[#eb8c62]" />
            <RiInstagramLine size={24} className="text-[#eb8c62]" />
            <RiTwitterLine size={24} className="text-[#eb8c62]" />
            <RiLinkedinFill size={24} className="text-[#eb8c62]" />
          </div>
          
      </div>}

    </div>
  );
};

export default Navbar;
